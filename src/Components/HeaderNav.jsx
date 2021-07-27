import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
  width: 100%;
  height: 15vh;
  padding: ${(props) => (props.monster ? "2vh 0 0 0" : "2vh 0 83vh 0")};
  margin: ${(props) => (props.monster ? "0 0 10px 0" : "0")};
  transition: padding 0.6s;
  border-bottom: ${(props) =>
    props.monster ? "3px solid black" : "3px solid #fbe8c6"};
  background-color: #fbe8c6;
  @media (max-width: 768px) {
    height: auto;
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
