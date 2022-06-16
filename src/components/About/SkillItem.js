import React from "react";
import styled from "styled-components";

const SkillItem = ({ skill }) => {
  return (
    <SkillItemStyled>
      <img src={skill.img} />
      <h2>{skill.name}</h2>
    </SkillItemStyled>
  );
};

const SkillItemStyled = styled.div`
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.5em;
  position: relative;
  text-align: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(2px);
  }
  background: linear-gradient(#010106, var(--border-color)) padding-box,
    linear-gradient(to right, var(--white-color), var(--white-color)) border-box;
  img {
    height: 2.5em;
    width: 2.5em;
    display: block;
    padding-bottom: 0.2em;
  }
  h2 {
    font-size: 0.5em;
    color: var(--white-color);
  }
`;
export default SkillItem;

// linear-gradient(var(--background-dark-grey), var(--border-color))
//       padding-box,
