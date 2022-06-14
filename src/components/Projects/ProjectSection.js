import React from "react";
import styled from "styled-components";
import Phonify from "../../img/phonify.png";

const ProjectSection = () => {
  return (
    <ProjectSectionStyled>
      <div className="project-container">
        <img src={Phonify} />
        <div className="project-desc-container">
          <h2>Phonify</h2>
          <h3>E-commerce App</h3>
          <p>
            Full stack e-commerce application built with React, Styled
            Components, PostgreSQL,<br></br>and Ruby on Rails.
          </p>
          <button>
            <a href="https://www.w3schools.com/">Live App</a>
          </button>
          <button>
            <a href="https://github.com/Jose-Escobedo/phonify-frontend/">
              Github
            </a>
          </button>
        </div>
      </div>
    </ProjectSectionStyled>
  );
};

const ProjectSectionStyled = styled.div`
  .project-container {
    display: flex;
    margin-top: 5rem;
    background: var(--background-dark-grey);
    width: 80%;
    padding: 2.5em;
    padding-left: 0;
    position: relative;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .project-desc-container {
    display: flex;
    flex-direction: column;
    z-index: 99;
    position: absolute;
    margin-left: 38em;
    width: 45%;
    h2 {
      font-size: 2em;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      color: var(--white-color);
    }
    h3 {
      font-size: 1em;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      color: var(--primary-color);
      padding-bottom: 1.2em;
    }
    p {
      font-size: 0.85em;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      line-height: 1.5em;
      color: var(--white-color);
      padding-bottom: 1.2em;
    }
    button {
      padding: 0.5em 0.5em;
      font-size: 0.8em;
      width: 30%;
      border: none;
      color: var(--white-color);
      border-bottom: 1px solid var(--primary-color);
      background: none;
      display: inline-block;
      text-transform: uppercase;
      position: relative;
      cursor: pointer;
    }

    button::before {
      content: "";
      position: absolute;
      background: linear-gradient(darkcyan, var(--primary-color)) padding-box;
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      -webkit-transition: top 0.3s ease-in-out;
    }
    button:hover::before {
      top: 0;
    }

    button:first-of-type {
      margin-bottom: 1.2em;
    }
  }
`;
export default ProjectSection;
