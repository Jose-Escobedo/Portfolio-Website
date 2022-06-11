import React from "react";
import { MainLayout } from "../styles/Layouts";
import { AboutStyled } from "../components/About/AboutElements";
import Title from "../components/Main/Title";
import ImageSection from "../components/Main/ImageSection";
import ServicesSection from "../components/Main/ServicesSection";
const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
