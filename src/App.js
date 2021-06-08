import React, { useState } from "react";
import Button from "./Components/Button";
import CurrentMonster from "./Components/CurrentMonster";
import "./App.css";

function App() {
  const [monsterData, updateMonsterData] = useState("");
  const [monster, updateMonster] = useState("");

  const fetchMonster = (search) => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((res) => {
        const results =
          res.results[Math.floor(Math.random() * res.results.length)];
        updateMonsterData(results);
        fetch(`https://www.dnd5eapi.co${results.url}`)
          .then((res) => res.json())
          .then((res) => {
            updateMonster(res);
          });
      })
      .catch((e) => console.log("No monster found ", e));
  };

  return (
    <div className="mainapp">
      <div>
        <h1>Monster Manual</h1>
        <h2>Dungeons &#38; Dragons 5e</h2>
      </div>
      <Button wording="Search" func={(search) => fetchMonster(search)} />
      <CurrentMonster monster={monster} monsterData={monsterData} />
    </div>
  );
}

export default App;
