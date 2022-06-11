import React from "react";
import { MainLayout } from "../styles/MainLayout";
import { AboutStyled } from "../components/About/AboutElements";
import Title from "../components/Main/Title";
import ImageSection from "../components/Main/ImageSection";
const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
