import React from "react";
import styled from "styled-components";

const MonsterContainer = styled.div`
  background: #e8bb41;
  font-family: "Open Sans", sans-serif;
  padding: 1rem;
  margin: 2rem;
`;

const CurrentMonster = ({ monster, onExpand }) => {
  return (
    <div>
      {monster && Array.isArray(monster) ? (
        <>
          <h2>List of monsters (click to view):</h2>
          {monster.map((mon) => (
            <MonsterContainer key={mon.name} onClick={() => onExpand(mon)}>
              <p>{mon.name}</p>
            </MonsterContainer>
          ))}
        </>
      ) : (
        <>
          {monster ? (
            <>
              <h2>Monster:</h2>
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
                <p>Challenge Rating: {monster.challenge_rating}</p>
              </MonsterContainer>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentMonster;
