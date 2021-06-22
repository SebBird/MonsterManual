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

  const fetchMonster = () => {
    const results = findMonster(allMonsters.results, monsterSearch);
    try {
      if (results.length === 1) {
        expandMonster(results[0]);
        fetch(`https://www.dnd5eapi.co${results[0].url}`);
      } else {
        updateMonster(results);
      }
    } catch (err) {
      console.log("Error: No search term found");
    }
  };

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        updateAllMonsters(res);
      });
  }, []);

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
    if (!monsterSearch) return;

    let monsters = [];
    result.forEach((monsterObj) => {
      if (monsterObj.name.toLowerCase().includes(monsterSearch.toLowerCase()))
        monsters.push(monsterObj);
    });
    updateMonsterList(monsters);
    return monsters;
  };

  const handleExpand = (monster) => {
    let newMon = expandMonster(monster);
    updateMonster(newMon);
  };

  const handleReturn = () => {
    updateMonster(monsterList);
  };

  return (
    <div className="mainapp">
      <Header/>
      <SearchBar 
        fetchMonster={fetchMonster}
        randomMonster={randomMonster}
        updateMonsterSearch={updateMonsterSearch}
        updateMonster={updateMonster}
        updateMonsterList={updateMonsterList} />
      <CurrentMonster
        monster={monster}
        onExpand={handleExpand}
        onReturn={handleReturn}
      />
    </div>
  );
}

export default App;
