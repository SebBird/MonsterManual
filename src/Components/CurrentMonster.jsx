import React from "react";
import styled from "styled-components";

const MonsterContainer = styled.div`
  background: #e8bb41;
  font-family: "Open Sans", sans-serif;
  padding: 1rem;
  margin: 2rem;
`;

const CurrentMonster = ({ monster, monsterData }) => {
  return (
    <div>
      {monster ? (
        <>
          <MonsterContainer>
            <p>
              {monster.name} -{" "}
              <i>
                {`${monster.size.replace(/^\w/, (c) => c.toUpperCase())} `}
                {monster.type.replace(/^\w/, (c) => c.toUpperCase())}
              </i>
            </p>
            <p>Alignment: {monster.alignment}</p>
            <p>Armor: {monster.armor_class}</p>
            <p>
              Hitpoints: {monster.hit_points} ({monster.hit_dice})
            </p>
          </MonsterContainer>
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
    </div>
  );
};

export default CurrentMonster;
