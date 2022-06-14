import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import SkillItem from "./SkillItem";
import Title from "./Title";
import { useState } from "react";
import HTML from "../../img/html.svg";
import CSS from "../../img/css.svg";
import JAVASCRIPT from "../../img/javascript.svg";
import REACT from "../../img/frontend.svg";
import RUBY from "../../img/backend.svg";
import RAILS from "../../img/rails.svg";
import POSTGRESQL from "../../img/postgresql.svg";
import STYLEDCOMPONENTS from "../../img/styled-components.svg";
import PHOTOSHOP from "../../img/photoshop.svg";
import FIGMA from "../../img/design.svg";
import GATSBY from "../../img/gatsby.svg";
import GIT from "../../img/git.svg";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JAVASCRIPT", img: JAVASCRIPT },
    { name: "REACT", img: REACT },
    { name: "RUBY", img: RUBY },
    { name: "RAILS", img: RAILS },
    { name: "POSTGRESQL", img: POSTGRESQL },
    { name: "STYLED COMPONENTS", img: STYLEDCOMPONENTS },
    { name: "ADOBE PHOTOSHOP", img: PHOTOSHOP },
    { name: "FIGMA", img: FIGMA },
    { name: "GATSBY", img: GATSBY },
    { name: "GIT", img: GIT },
  ]);
  return (
    <SkillsStyled>
      <Title title={"Skills"} span={"Skills"} />
      <InnerLayout>
        <div className="skills">
          {skills.map((skill) => {
            return <SkillItem skill={skill} />;
          })}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    padding: 0.5em;
    width: 100%;
    display: inline-grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
  }
`;
export default SkillsSection;
