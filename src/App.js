import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import CurrentMonster from "./Components/CurrentMonster";
import "./App.css";

function App() {
  const [allMonsters, updateAllMonsters] = useState();
  const [monster, updateMonster] = useState("");
  const [monsterList, updateMonsterList] = useState();
  const [monsterSearch, updateMonsterSearch] = useState();
  const pageSize = 5;
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        updateAllMonsters(res);
      });
  }, []);

  const fetchMonster = () => {
    const results = findMonster(allMonsters.results, monsterSearch);
    try {
      results.length === 1
        ? expandMonster(results[0])
        : paginateResults(results, pageSize);
    } catch (err) {
      console.log("Error: No search term found");
    }
  };

  const paginateResults = (results, pageSize) => {
    let pages = [];
    let amountOfPages = Math.ceil(results.length / pageSize);

    for (let i = 0; i < amountOfPages; i++) {
      pages[i] = [];

      for (let ii = 0; ii < pageSize; ii++) {
        if (results[ii + i * pageSize] === undefined) {
          break;
        }
        pages[i][ii] = results[ii + i * pageSize];
      }
    }

    updateMonsterList(pages);
    updateMonster(pages[currentPage - 1]);
  };

  const expandMonster = (mon) => {
    fetch(`https://www.dnd5eapi.co${mon.url}`)
      .then((res) => res.json())
      .then((res) => {
        updateMonster(res);
      })
      .catch((e) => console.log("No monster found ", e));
  };

  const randomMonster = () => {
    const results =
      allMonsters.results[
        Math.floor(Math.random() * allMonsters.results.length)
      ];
    expandMonster(results);
  };

  const findMonster = (result, monsterSearch) => {
    if (!monsterSearch || !result) return;

    let monsters = [];
    result.forEach((monsterObj) => {
      if (monsterObj.name.toLowerCase().includes(monsterSearch.toLowerCase()))
        monsters.push(monsterObj);
    });
    updateMonsterList(monsters);
    return monsters;
  };

  const handleExpand = (monster) => {
    updateMonster(expandMonster(monster));
  };

  const handleReturn = () => {
    Array.isArray(monsterList[0])
      ? updateMonster(monsterList[currentPage - 1])
      : updateMonster(monsterList);
  };

  const previousPage = () => {
    let newPage = currentPage - 1;

    if (newPage < 1) return;

    updateCurrentPage(newPage);
    updateMonster(monsterList[newPage - 1]);
  };

  //Combine these into a new function, to prevent repetition

  const nextPage = () => {
    let newPage = currentPage + 1;

    if (newPage > monsterList.length) return;

    updateCurrentPage(newPage);
    updateMonster(monsterList[newPage - 1]);
  };

  return (
    <div className="mainapp">
      <Header />
      <SearchBar
        fetchMonster={fetchMonster}
        randomMonster={randomMonster}
        updateMonsterSearch={updateMonsterSearch}
        updateMonster={updateMonster}
        updateMonsterList={updateMonsterList}
      />
      <CurrentMonster
        monster={monster}
        onExpand={handleExpand}
        onReturn={handleReturn}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;
