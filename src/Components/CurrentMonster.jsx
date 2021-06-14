import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ExpandButton from "./ExpandButton";

const MonsterContainer = styled.div`
  background: #f0c775;
  border: 2px solid #cf9117;
  font-family: "Open Sans", sans-serif;
  padding: 1rem;
  margin: 2rem;
`;

const MonsterList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const MonsterSingle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const googleImageSearch = (monsterName) => {
  let query = monsterName.replace(" ", "+");
  return `https://www.google.com/search?tbm=isch&q=DnD+${query}`;
};

const CurrentMonster = ({ monster, onExpand, onReturn }) => {
  return (
    <div>
      {monster && Array.isArray(monster) ? (
        <>
          <h2>List of monsters:</h2>
          {monster.map((mon) => (
            <MonsterContainer key={mon.name}>
              <MonsterList>
                <p>{mon.name}</p>
                <ExpandButton handleChange={() => onExpand(mon)} />
              </MonsterList>
            </MonsterContainer>
          ))}
        </>
      ) : (
        <>
          {monster ? (
            <>
              <h2>Monster:</h2>
              <MonsterContainer>
                <MonsterSingle>
                  <div>
                    <p>
                      <b>{monster.name}</b> -{" "}
                      <i>
                        {`${monster.size.replace(/^\w/, (c) =>
                          c.toUpperCase()
                        )} `}
                        {monster.type.replace(/^\w/, (c) => c.toUpperCase())}
                      </i>
                    </p>
                    <p>Alignment: {monster.alignment}</p>
                    <p>Armor: {monster.armor_class}</p>
                    <p>
                      Hitpoints: {monster.hit_points} ({monster.hit_dice})
                    </p>
                    <p>Challenge Rating: {monster.challenge_rating}</p>
                    <a
                      href={googleImageSearch(monster.name)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Picture
                    </a>
                  </div>
                  <BackButton handleChange={onReturn} />
                </MonsterSingle>
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
