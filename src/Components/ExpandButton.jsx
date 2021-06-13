import React from 'react';
import styled from "styled-components";
import Plus from '../Assets/Plus.png'

const PlusBtn = styled.img`
height: 1rem;
width: 1rem;
cursor: pointer;`;

const ExpandButton = () => {
    return ( 
        <PlusBtn src={Plus} alt="" />
     );
}
 
export default ExpandButton;