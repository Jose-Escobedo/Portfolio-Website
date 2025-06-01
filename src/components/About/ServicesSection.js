import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Main/Title";
import ServiceCard from "./ServiceCard";
import frontend from "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/frontend.svg?alt=media&token=e9f08151-8fea-4a95-880e-928261f2bdbc";
import backend from "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/nodejs.svg?alt=media&token=8b7a4bae-cc68-421a-b2fb-95183208b81f";
import design from "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/design.svg?alt=media&token=84522da9-0c58-497e-acb4-26054267a833";

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
