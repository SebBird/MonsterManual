import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
  width: 100%;
  height: ${(props) => (props.monster ? "20vh" : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 5px 0;
  transition: height 0.8s;
  border-bottom: 3px solid black;
  background-color: #fff4de;
  @media (max-width: 768px) {
    height: ${(props) => (props.monster ? "30vh" : "100vh")};
  } ;
`;

const HeaderNav = ({
  fetchMonster,
  randomMonster,
  updateMonsterSearch,
  resetPage,
  monster,
}) => {
  return (
    <HeaderDiv monster={monster}>
      <Header />
      <SearchBar
        fetchMonster={fetchMonster}
        randomMonster={randomMonster}
        updateMonsterSearch={updateMonsterSearch}
        resetPage={resetPage}
        monster={monster}
      />
    </HeaderDiv>
  );
};

export default HeaderNav;
