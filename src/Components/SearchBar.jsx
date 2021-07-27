import React, { useRef } from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const Label = styled.label`
  font-weight: 500;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 0.3rem;
  outline: none;
`;

const SearchBar = ({
  fetchMonster,
  randomMonster,
  updateMonsterSearch,
  resetPage,
  monster,
}) => {
  const inputRef = useRef("searchBar");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchMonster();
      }}
    >
      <Container monster={monster}>
        <Label htmlFor="monsearch">Search for a monster:</Label>
        <Input
          type="text"
          name="monsearch"
          ref={inputRef}
          onChange={(e) => {
            updateMonsterSearch(e.target.value);
            if (!e.target.value) {
              resetPage();
            }
          }}
        ></Input>
        <div>
          <Button wording="Search" func={fetchMonster} />
          <Button
            wording="Clear"
            func={() => {
              document.querySelector("input").value = "";
              resetPage();
            }}
          />
          <Button wording="Random" func={randomMonster} />
        </div>
      </Container>
    </form>
  );
};

export default SearchBar;
