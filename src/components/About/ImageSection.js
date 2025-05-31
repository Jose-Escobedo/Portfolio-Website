import React from "react";
import styled from "styled-components";
import about from "../../img/about.png";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/About-ProfilePicture.JPG?alt=media&token=32ee499a-d0c9-4db1-98d7-07b7b221cfad&_gl=1*1awf9bm*_ga*MjAxNTYwMjQ1LjE2ODU3NDY0MjU.*_ga_CW55HF8NVT*MTY4NTc0NjQyNS4xLjEuMTY4NTc0NjkwOC4wLjAuMA.."
          }
          alt="about"
        />
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
          passion for web development. When I’m not at my computer, I like to
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
            <p>: 24</p>
            <p>: Spanish, English</p>
            <p>: California, United States</p>
          </div>
        </div>
  <a href="/resume.docx" target="_blank" rel="noopener noreferrer">
  <PrimaryButton
    className="about-resume-btn"
    title={"View Resume"}
  />
</a>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  .left-content {
    width: 50%;
    img {
      width: 95%;
      min-height: 90%;
      object-fit: cover;
    }
    @media screen and (max-width: 1100px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      img {
        width: 50%;
        min-height: 50%;
      }
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .right-content {
    width: 50%;

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
      color: var(--white-color);
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
    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-top: 3em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        text-align: center;
      }
      .paragraph {
        font-size: 1rem;
        text-align: center;
      }
      .info-title {
        padding-right: none;
      }
      .info-title p {
        font-size: 0.9rem;
      }
      .info p {
        font-size: 0.9rem;
      }
      .about-info {
        justify-content: center;
        text-align: center;
      }
    }

    @media screen and (max-width: 535px) {
      h4 {
        text-align: center;
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
        span {
          font-size: 1.3rem;
        }
      }
      .paragraph {
        font-size: 0.8rem;
        text-align: center;
      }
      .info-title {
        padding-right: none;
      }
      .info-title p {
        font-size: 0.7rem;
      }
      .info p {
        font-size: 0.7rem;
      }
    }

    @media screen and (max-width: 480px) {
      text-align: center;
      margin-top: 1rem;
      .paragraph {
        font-size: 0.7rem;
        text-align: center;
      }
      p {
        font-size: 1.1rem;
      }

      .info-title p {
        font-size: 0.5rem;
      }
      .info p {
        font-size: 0.5rem;
      }
      h4 {
        font-size: 1.5rem;
        span {
          font-size: 1.5rem;
        }
      }
      .about-info {
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export default ImageSection;
