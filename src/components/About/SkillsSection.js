import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import SkillItem from "./SkillItem";
import Title from "../Main/Title";
import { useState } from "react";
import HTML from "../../img/html.svg";
import CSS from "../../img/css.svg";
import JAVASCRIPT from "../../img/javascript.svg";
import REACT from "../../img/frontend.svg";
import NODEJS from "../../img/nodejs.svg";
import RAILS from "../../img/rails.svg";
import POSTGRESQL from "../../img/postgresql.svg";
import MONGODB from "../../img/mongodb.svg";
import PHOTOSHOP from "../../img/photoshop.svg";
import FIGMA from "../../img/design.svg";
import NEXTJS from "../../img/nextjs.svg";
import GIT from "../../img/git.svg";

//note

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JAVASCRIPT", img: JAVASCRIPT },
    { name: "REACT", img: REACT },
    { name: "NODEJS", img: NODEJS },
    { name: "RAILS", img: RAILS },
    { name: "MONGODB", img: MONGODB },
    { name: "POSTGRESQL", img: POSTGRESQL },  
    { name: "ADOBE PHOTOSHOP", img: PHOTOSHOP },
    { name: "FIGMA", img: FIGMA },
    { name: "NEXTJS", img: NEXTJS },
    { name: "GIT", img: GIT },
  ]);
  return (
    <SkillsStyled>
      <Title title={"Skills"} span={"Skills"} />
      <InnerLayout>
        <div className="skills">
          {skills.map((skill) => {
            return <SkillItem skill={skill} key={skill.name} />;
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

    @media screen and (max-width: 910px) {
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 850px) {
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;
export default SkillsSection;
