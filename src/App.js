import React, { useState } from "react";
import Button from "./Components/Button";
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
    <div>
      {monster ? (
        <>
          <div>
            <p>Monster: {monster.name}</p>
            <p>Size: {monster.size}</p>
            <p>Type: {monster.type.toUpperCase()}</p>
            <p>Alignment: {monster.alignment}</p>
            <p>Armor: {monster.armor_class}</p>
            <p>
              Hitpoints: {monster.hit_points} ({monster.hit_dice})
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>{monsterData.name}</p>
            <a href={`https://www.dnd5eapi.co${monsterData.url}`}>
              {monsterData.url ? "Click to view monster" : ""}
            </a>
          </div>
        </>
      )}

      <Button wording="Search" func={(search) => fetchMonster(search)} />
    </div>
  );
}

export default App;
