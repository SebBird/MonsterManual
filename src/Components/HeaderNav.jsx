import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0 5px 0;
  border-bottom: 2px solid black;
  background-color: #fff4de;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const HeaderNav = ({
  fetchMonster,
  randomMonster,
  updateMonsterSearch,
  updateMonster,
  updateMonsterList,
}) => {
  return (
    <HeaderDiv>
      <Header />
      <SearchBar
        fetchMonster={fetchMonster}
        randomMonster={randomMonster}
        updateMonsterSearch={updateMonsterSearch}
        updateMonster={updateMonster}
        updateMonsterList={updateMonsterList}
      />
    </HeaderDiv>
  );
};

export default HeaderNav;
