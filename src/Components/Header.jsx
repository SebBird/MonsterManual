import React from "react";
import styled from "styled-components";
import DragonLeft from "../Assets/DragonLeft.png";
import DragonRight from "../Assets/DragonRight.png";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  } ;
`;

const Image = styled.img`
  width: 15%;
  padding: 0 0 0.5rem 0;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Image src={DragonLeft} alt="" />
      <div>
        <h1>Monster Manual</h1>
        <h2>Dungeons &#38; Dragons 5e</h2>
      </div>
      <Image src={DragonRight} alt="" />
    </HeaderDiv>
  );
};

export default Header;
