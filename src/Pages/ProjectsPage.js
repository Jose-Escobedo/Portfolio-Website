import React from "react";
import { MainLayout } from "../styles/Layouts";
import { ProjectsStyled } from "../components/Projects/ProjectsElements";
import Title from "../components/Main/Title";
import ProjectSection from "../components/Projects/ProjectSection";
const ProjectsPage = () => {
  return (
    <MainLayout>
      <ProjectsStyled>
        <Title title={"Projects"} span={"Projects"} />
        <ProjectSection />
      </ProjectsStyled>
    </MainLayout>
  );
};

export default ProjectsPage;
