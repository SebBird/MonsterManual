import React, { useState } from "react";
import Button from "./Components/Button";
import CurrentMonster from "./Components/CurrentMonster";
import "./App.css";

function App() {
  let allMonsters = fetch(`https://www.dnd5eapi.co/api/monsters`).then((res) =>
    res.json().then((res) => (allMonsters = res))
  );

  const [monster, updateMonster] = useState("");
  const [monsterList, updateMonsterList] = useState();
  const [monsterSearch, updateMonsterSearch] = useState();

  const fetchMonster = () => {
    const results = findMonster(allMonsters.results, monsterSearch);
    try {
      if (results.length === 1) {
        expandMonster(results[0]);
      } else {
        updateMonster(results);
      }
    } catch (err) {
      console.log("Error: No search term found");
    }
  };

  const expandMonster = (mon) => {
    fetch(`https://www.dnd5eapi.co${mon.url}`)
      .then((res) => res.json())
      .then((res) => {
        updateMonster(res);
      });
  };

  const randomMonster = () => {
    const results =
      allMonsters.results[
        Math.floor(Math.random() * allMonsters.results.length)
      ];
    fetch(`https://www.dnd5eapi.co${results.url}`)
      .then((res) => res.json())
      .then((res) => {
        updateMonster(res);
      })
      .catch((e) => console.log("No monster found ", e));
  };

  const findMonster = (result, monsterSearch) => {
    if (!monsterSearch || !result) return;

    let monsters = [];

    console.log(result, monsterSearch);
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
      <div>
        <h1>Monster Manual</h1>
        <h2>Dungeons &#38; Dragons 5e</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMonster();
        }}
      >
        <label htmlFor="monsearch">Search for a monster:</label>
        <input
          type="text"
          name="monsearch"
          onChange={(e) => {
            updateMonsterSearch(e.target.value);
            if (!e.target.value) {
              updateMonster("");
              updateMonsterList("");
            }
          }}
        ></input>
        <Button wording="Search" func={fetchMonster} />
        <Button wording="Random" func={randomMonster} />
      </form>
      <CurrentMonster
        monster={monster}
        onExpand={handleExpand}
        onReturn={handleReturn}
      />
    </div>
  );
}

export default App;
