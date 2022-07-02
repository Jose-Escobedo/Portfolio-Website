import React from "react";
import { MainLayout } from "../styles/Layouts";
import { AboutStyled } from "../components/About/AboutElements";
import AboutTitle from "../components/About/AboutTitle";
import ImageSection from "../components/About/ImageSection";
import ServicesSection from "../components/About/ServicesSection";
import SkillsSection from "../components/About/SkillsSection";
const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <AboutTitle title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        <SkillsSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
