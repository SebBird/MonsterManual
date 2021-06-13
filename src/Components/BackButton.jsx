import React from 'react';
import styled from "styled-components";
import Exit from '../Assets/Exit.png'

const BackBtn = styled.img`
height: 1rem;
width: 1rem;
cursor: pointer;
&:hover {
    transform: scale(1.1);
}`;

const BackButton = ({handleChange}) => {
    return ( 
        <BackBtn src={Exit} onClick={handleChange} alt="" />
     );
}
 
export default BackButton;