import React from "react";
import styled from "styled-components";
import resume from "../../img/resume.jpg";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Lorem Ipsum</span>
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis malesuada mauris, nec pharetra risus nec. Sed sagittis
          aliquet.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 22</p>
            <p>: Spanish, English</p>
            <p>: California, United States</p>
            <p>: Freelance</p>
          </div>
        </div>
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
      width: 90%;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color) span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
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
    }
  }
`;

export default ImageSection;
