import React, { useState } from "react";
import Button from "./Components/Button";
import CurrentMonster from "./Components/CurrentMonster";
import "./App.css";

function App() {
  const [monster, updateMonster] = useState("");
  const [monsterSearch, updateMonsterSearch] = useState();

  const fetchMonster = () => {
    updateMonster("");
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        const results = findMonster(res.results, monsterSearch);
        fetch(`https://www.dnd5eapi.co${results[0].url}`)
          /*
          Currently just displays first result
          Change this so it displays a list of results, and user can click a monster to
          get the extended info.
          This will prevent extensive calls to the API and instead only call it twice.
          Once initially upon search, then again if the user clicks a monster result.
        */
          .then((res) => res.json())
          .then((res) => {
            updateMonster(res);
          });
      })
      .catch((e) => console.log("No monster found ", e));
  };

  const randomMonster = () => {
    updateMonster("");
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
    let monsters = [];

    for (let monsterObj of result) {
      if (monsterObj.name.toLowerCase().includes(monsterSearch.toLowerCase()))
        monsters.push(monsterObj);
    }
    console.log(monsters);
    return monsters;
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
          onChange={(e) => updateMonsterSearch(e.target.value)}
        ></input>
        <Button wording="Search" func={fetchMonster} />
        <Button wording="Random" func={randomMonster} />
      </form>
      <CurrentMonster monster={monster} />
    </div>
  );
}

export default App;
