import React from 'react';
import styled from "styled-components";
import Plus from '../Assets/Plus.png'

const PlusBtn = styled.img`
height: 1rem;
width: 1rem;
margin: 0 1rem;
cursor: pointer;
&:hover {
    transform: scale(1.1);
}`;

const ExpandButton = ({handleChange}) => {
    return ( 
        <PlusBtn src={Plus} onClick={handleChange} alt="" />
     );
}
 
export default ExpandButton;