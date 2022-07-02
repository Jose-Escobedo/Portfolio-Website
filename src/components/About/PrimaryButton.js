import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

const PrimaryButtonStyled = styled.a`
  background: linear-gradient(var(--primary-color), #003e80) padding-box;
  padding: 0.5em 2em;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2em;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export default PrimaryButton;
