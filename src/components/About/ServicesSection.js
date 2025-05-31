import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Main/Title";
import ServiceCard from "./ServiceCard";
import frontend from "../../img/frontend.svg";
import backend from "../../img/nodejs.svg";
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
              "I use Figma and Adobe Photoshop to design clean, modern user interfaces tailored to your vision."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={frontend}
              title={"Frontend"}
              paragraph={
                "I build fast, responsive frontends with React.js and Next.js, bringing designs to life across all devices."
              }
            />
          </div>
          <ServiceCard
            image={backend}
            title={"Backend"}
            paragraph={
               "I leverage Node.js to create fast and secure backend services tailored to your app’s needs."
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

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      grid-gap: 2rem;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      grid-gap: 1.3rem;
    }
  }
  .mid-card {
    margin: 0 1.2rem;

    @media screen and (max-width: 1100px) {
      margin: 0;
    }

    @media screen and (max-width: 480px) {
      margin: 0;
    }
  }
`;

export default ServicesSection;
