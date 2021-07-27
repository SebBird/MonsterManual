import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ExpandButton from "./ExpandButton";
import Button from "./Button";
import Shield from "../Assets/Shield.svg";

const PageNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    margin: 0;
  }
`;

const MonsterContainer = styled.div`
  box-shadow: 0 0 5px 3px #cccccc;
  background: #f0c775;
  border: 2px solid #cf9117;
  border-radius: 6px;
  font-family: "Open Sans", sans-serif;
  padding: 1rem;
  margin: 2rem;
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const MonsterList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  > p {
    margin: 0;
  }
`;

const MonsterSingle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MonsterName = styled.h2`
  margin: 0;
`;

const IconInfo = styled.div`
  height: 40px;
  text-align: center;
  > p {
    margin: 0;
    font-weight: 8000;
    position: relative;
    bottom: 37px;
  }
`;

const MonsterIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const StatBlocks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75px;
  margin: 1rem 0.5rem;
  padding: 0.1rem;
  border: 2px solid #cf9117;
  border-radius: 5px;
  background: #ffd27a;
  > p {
    margin: 0;
  }
  @media (max-width: 768px) {
    margin: 0.2rem 0.5rem;
  }
`;

const PageIcon = styled.div`
  height: 8px;
  width: 8px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #b38d25;
  filter: opacity(0.5);
  display: inline-block;
  transition: transform 0.4s, filter 0.4s;
`;

const googleImageSearch = (monsterName) => {
  let query = monsterName.replace(" ", "+");
  return `https://www.google.com/search?tbm=isch&q=D%26D+${query}`;
};

const capitaliseFirst = (word) => {
  return word.replace(/^\w/, (c) => c.toUpperCase());
};

const calculateModifier = (stat) => {
  let modifier = Math.floor(stat / 2 - 5);

  return modifier > -1 ? `+${modifier}` : modifier;
};

const CurrentMonster = ({
  monster,
  monsterList,
  onExpand,
  onReturn,
  changePage,
  currentPage,
}) => {
  return (
    <div>
      {monster && Array.isArray(monster) ? (
        //List of monsters
        <>
          <h2>List of monsters:</h2>
          <PageNav>
            <p>
              Current page: {currentPage} of {monsterList.length}
            </p>
            <div>
              <Button wording={"Previous"} func={() => changePage("-")} />
              <Button wording={"Next"} func={() => changePage("+")} />
            </div>
            <div>
              {monsterList.map((mon, index) => {
                if (monsterList.length !== 1) {
                  if (index + 1 === currentPage) {
                    return (
                      <PageIcon
                        key={index}
                        style={{
                          transform: "scale(1.6)",
                          filter: "opacity(1)",
                        }}
                      ></PageIcon>
                    );
                  }

                  return <PageIcon key={index}></PageIcon>;
                }
                return null;
              })}
            </div>
          </PageNav>
          {monster.map((mon) => (
            <MonsterContainer key={mon.name}>
              <MonsterList>
                <p>
                  <b>{mon.name}</b>
                </p>
                <ExpandButton handleChange={() => onExpand(mon)} />
              </MonsterList>
            </MonsterContainer>
          ))}
        </>
      ) : (
        //Single monster
        <>
          {monster ? (
            <>
              <h2>Monster:</h2>
              <MonsterContainer>
                <Title>
                  <MonsterName>{monster.name}</MonsterName>
                  <IconInfo>
                    <MonsterIcon src={Shield} />
                    <p>{monster.armor_class}</p>
                  </IconInfo>
                </Title>

                <MonsterSingle>
                  <div>
                    <p>
                      <i>
                        {`${capitaliseFirst(monster.size)} `}
                        {capitaliseFirst(monster.type)},{" "}
                        {capitaliseFirst(monster.alignment)}
                      </i>
                    </p>
                    <p>
                      Hitpoints: {monster.hit_points} ({monster.hit_dice})
                    </p>
                    <p>Speed: {monster.speed.walk}</p>
                    <p>Challenge Rating: {monster.challenge_rating}</p>
                    <a
                      href={googleImageSearch(monster.name)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Picture
                    </a>
                    <StatBlocks>
                      <Stats>
                        <p>STR:</p>
                        <p>
                          {monster.strength} (
                          {calculateModifier(monster.strength)})
                        </p>
                      </Stats>
                      <Stats>
                        <p>DEX:</p>
                        <p>
                          {monster.dexterity} (
                          {calculateModifier(monster.dexterity)})
                        </p>
                      </Stats>
                      <Stats>
                        <p>CON:</p>
                        <p>
                          {monster.constitution} (
                          {calculateModifier(monster.constitution)})
                        </p>
                      </Stats>
                      <Stats>
                        <p>INT:</p>
                        <p>
                          {monster.intelligence} (
                          {calculateModifier(monster.intelligence)})
                        </p>
                      </Stats>
                      <Stats>
                        <p>WIS:</p>
                        <p>
                          {monster.wisdom} ({calculateModifier(monster.wisdom)})
                        </p>
                      </Stats>
                      <Stats>
                        <p>CHA:</p>
                        <p>
                          {monster.charisma} (
                          {calculateModifier(monster.charisma)})
                        </p>
                      </Stats>
                    </StatBlocks>
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
