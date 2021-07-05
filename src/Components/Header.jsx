import React from "react";
import styled from "styled-components";
import DragonLeft from "../Assets/DragonLeft.png";
import DragonRight from "../Assets/DragonRight.png";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0;
  } ;
`;

const H1 = styled.h1`
font-size: 1.2rem;
margin: 0;
`;
const H2 = styled.h1`
font-size: 1rem;
margin: 0;
`;

const Image = styled.img`
  width: 15%;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Image src={DragonLeft} alt="" />
      <div>
        <H1>Monster Manual</H1>
        <H2>Dungeons &#38; Dragons 5e</H2>
      </div>
      <Image src={DragonRight} alt="" />
    </HeaderDiv>
  );
};

export default Header;
