import React from 'react';
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;

  };
`

const Label = styled.label`
padding: 0 0.5rem;`;

const Input = styled.input`
border-radius: 5px;
padding: 0.2rem;
outline: none;`;

const SearchBar = ({fetchMonster, randomMonster, updateMonsterSearch, updateMonster, updateMonsterList}) => {
    return ( 
        <>
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
              onChange={(e) => {
                updateMonsterSearch(e.target.value);
                if (!e.target.value) {
                  updateMonster("");
                  updateMonsterList("");
                }
              }}
            ></Input>
            <Button wording="Search" func={fetchMonster} />
            <Button wording="Random" func={randomMonster} />
        </Container>
        </form>
        </>
     );
}
 
export default SearchBar;