import React from "react";
import styled from "styled-components";
import about from "../../img/about.png";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={about} alt="about" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Jose Escobedo</span>
        </h4>

        <p className="paragraph">
          As a firm believer in life-long learning, I’m a full stack developer
          with a passion for JavaScript, React and all things web development.
          The unique combination of creativity, logic, technology and never
          running out of new things to discover, drives my excitement and
          passion for web development. When I’m not at my computer I like to
          spend my time shooting photography, reading and hiking.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Jose Escobedo</p>
            <p>: 22</p>
            <p>: Spanish, English</p>
            <p>: California, United States</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
      .info p {
        color: var(--white-color);
      }
    }
  }
`;

export default ImageSection;
