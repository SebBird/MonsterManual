import React, { useState } from "react";
import Button from "./Components/Button";
import CurrentMonster from "./Components/CurrentMonster";
import "./App.css";

function App() {
  const [monster, updateMonster] = useState("");
  const [monsterList, updateMonsterList] = useState();
  const [monsterSearch, updateMonsterSearch] = useState();

  const fetchMonster = () => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        const results = findMonster(res.results, monsterSearch);

        if (results.length === 1) {
          fetch(`https://www.dnd5eapi.co${results[0].url}`)
            .then((res) => res.json())
            .then((res) => {
              updateMonster(res);
            });
        } else {
          updateMonster(results);
        }
      })
      .catch((e) => console.log("No monster found ", e));
  };

  const expandMonster = (mon) => {
    fetch(`https://www.dnd5eapi.co${mon.url}`)
      .then((res) => res.json())
      .then((res) => {
        updateMonster(res);
      });
  };

  const randomMonster = () => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        const results =
          res.results[Math.floor(Math.random() * res.results.length)];
        fetch(`https://www.dnd5eapi.co${results.url}`)
          .then((res) => res.json())
          .then((res) => {
            updateMonster(res);
          });
      })
      .catch((e) => console.log("No monster found ", e));
  };

  const findMonster = (result, monsterSearch) => {
    if (!monsterSearch) return;

    let monsters = [];

    for (let monsterObj of result) {
      if (monsterObj.name.toLowerCase().includes(monsterSearch.toLowerCase()))
        monsters.push(monsterObj);
    }
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
            if (!e.target.value){
              updateMonster("");
              updateMonsterList("");
            }}}
        ></input>
        <Button wording="Search" func={fetchMonster} />
        <Button wording="Random" func={randomMonster} />
      </form>
      <CurrentMonster monster={monster} onExpand={handleExpand} onReturn={handleReturn} />
    </div>
  );
}

export default App;
