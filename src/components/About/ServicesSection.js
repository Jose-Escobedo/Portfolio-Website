import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Main/Title";
import ServiceCard from "./ServiceCard";
import frontend from "../../img/frontend.svg";
import backend from "../../img/backend.svg";
import design from "../../img/design.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Design"}
            paragraph={
              "Along with my Adobe Photoshop skills, I am able to create and design in Figma."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={frontend}
              title={"Frontend"}
              paragraph={
                "My experience with React JS allows me to bring beautiful user interfaces to life."
              }
            />
          </div>
          <ServiceCard
            image={backend}
            title={"Backend"}
            paragraph={
              "With my knowledge in Ruby, I can create the desired backend with Ruby on Rails."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      grid-gap: 1.3rem;
    }
  }
  .mid-card {
    margin: 0 1.2rem;

    @media screen and (max-width: 480px) {
      margin: 0;
    }
  }
`;

export default ServicesSection;
