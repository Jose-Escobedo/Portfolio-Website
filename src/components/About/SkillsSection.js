import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import SkillItem from "./SkillItem";
import Title from "../Main/Title";
import { useState } from "react";


//note

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    { name: "HTML", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/html.svg?alt=media&token=4f3bd50c-0d4a-4300-8060-c2b67a703098" },
    { name: "CSS", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/css.svg?alt=media&token=59f57fc1-8dfe-47f7-b762-4a3133432233" },
    { name: "JAVASCRIPT", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/javascript.svg?alt=media&token=97da6800-4ec5-4236-a3ab-9b8dfd329f43" },
    { name: "REACT", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/frontend.svg?alt=media&token=e9f08151-8fea-4a95-880e-928261f2bdbc" },
    { name: "NODEJS", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/nodejs.svg?alt=media&token=8b7a4bae-cc68-421a-b2fb-95183208b81f" },
    { name: "PHP", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/php-logo.svg?alt=media&token=b2f8507e-c5f5-4dae-8ef6-0bf7823e1140" },
    { name: "MONGODB", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/mongodb.svg?alt=media&token=153d6676-20fc-483d-8205-3c31b04f1293" },
    { name: "POSTGRESQL", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/postgresql.svg?alt=media&token=bf31aadc-6f56-4515-b965-fb2265c1bb32" },  
    { name: "ADOBE PHOTOSHOP", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/photoshop.svg?alt=media&token=811e870e-8826-48d9-83fb-0b5d8c130860" },
    { name: "FIGMA", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/design.svg?alt=media&token=84522da9-0c58-497e-acb4-26054267a833" },
    { name: "NEXTJS", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/nextjs.svg?alt=media&token=b0d5ec34-50d6-47b5-9777-d60afd8765f3" },
    { name: "GIT", img: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/git.svg?alt=media&token=496a205d-3ad8-4cfd-a7dd-be5ce4f00a22" },
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
