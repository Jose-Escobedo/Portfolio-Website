import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Title from "./Title";
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis malesuada."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={frontend}
              title={"Frontend"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis malesuada."
              }
            />
          </div>
          <ServiceCard
            image={backend}
            title={"Backend"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis malesuada."
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
  }
  .mid-card {
    margin: 0 1.2rem;
  }
`;

export default ServicesSection;
