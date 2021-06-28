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
  padding: 0 0.5rem;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 0.2rem;
  outline: none;
`;

const SearchBar = ({
  fetchMonster,
  randomMonster,
  updateMonsterSearch,
  updateMonster,
  updateMonsterList,
}) => {
  const inputRef = useRef("searchBar");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchMonster();
      }}
    >
      <Container>
        <Label htmlFor="monsearch">Search for a monster:</Label>
        <Input
          type="text"
          name="monsearch"
          ref={inputRef}
          onChange={(e) => {
            updateMonsterSearch(e.target.value);
            if (!e.target.value) {
              updateMonster("");
              updateMonsterList("");
            }
          }}
        ></Input>
        <div>
          <Button wording="Search" func={fetchMonster} />
          <Button
            wording="Clear"
            func={() => {
              document.querySelector("input").value = "";
              updateMonsterSearch("");
              updateMonster("");
            }}
          />
          <Button wording="Random" func={randomMonster} />
        </div>
      </Container>
    </form>
  );
};

export default SearchBar;
