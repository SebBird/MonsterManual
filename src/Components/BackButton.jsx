import React from 'react';
import styled from "styled-components";
import Exit from '../Assets/Exit.png'

const BackBtn = styled.img`
height: 1rem;
width: 1rem;
cursor: pointer;`;

const BackButton = () => {
    return ( 
        <BackBtn src={Exit} alt="" />
     );
}
 
export default BackButton;