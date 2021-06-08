import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomButton = styled.button`
  height: 30px;
  width: 90px;
  border: none;
  text-decoration: none;
  background: #e8bb41;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: 70ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:active {
    background: #b38d25;
    transform: scale(0.95);
  }
`;

const Button = ({ func, wording }) => (
  <CustomButton type="button" onClick={func}>
    {wording}
  </CustomButton>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  wording: PropTypes.string.isRequired,
};

export default Button;
