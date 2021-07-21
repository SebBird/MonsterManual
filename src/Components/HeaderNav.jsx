import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
  width: 100%;
  max-height: ${(props) => (props.monster ? "20vh" : "200vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 5px 0;
  transition: max-height 0.8s, border-bottom 1s;
  border-bottom: ${(props) =>
    props.monster ? "3px solid black" : "3px solid #fbe8c6"};
  background-color: #fbe8c6;
  @media (max-width: 768px) {
    max-height: ${(props) => (props.monster ? "30vh" : "200vh")};
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
