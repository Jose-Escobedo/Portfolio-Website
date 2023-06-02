import React from "react";
import styled from "styled-components";
import Phonify from "../../img/phonify.png";

const ProjectSection = () => {
  return (
    <ProjectSectionStyled>
      <div className="project-container">
        <div className="project-img-border">
          <a href="https://phonify-frontend.herokuapp.com/">
            <img src={Phonify} />
          </a>
        </div>
        <div className="project-desc-container">
          <h2>Phonify</h2>
          <h3>E-commerce App</h3>
          <p>
            Full stack e-commerce application built with React, Styled
            Components, PostgreSQL,<br></br>and Ruby on Rails.
          </p>
          <button>
            <a href="https://phonify-frontend.herokuapp.com/">Live App</a>
          </button>
          <button>
            <a href="https://github.com/Jose-Escobedo/phonify-frontend/">
              Github
            </a>
          </button>
        </div>
        <div className="project-img-border">
          <a href="https://www.tortasmexico-studiocity.com/">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-02%20160504.png?alt=media&token=5602e1d3-d938-461c-bada-20fda88d814f&_gl=1*1gwnjhk*_ga*MjAxNTYwMjQ1LjE2ODU3NDY0MjU.*_ga_CW55HF8NVT*MTY4NTc0NjQyNS4xLjEuMTY4NTc0NzM1MC4wLjAuMA.."
              }
            />
          </a>
        </div>
        <div className="project-desc-container">
          <h2>Tortas Mexico Studio City</h2>
          <h3>Restaurant Delivery Website</h3>
          <p>
            MERN stack Restaurant application built with React, Styled
            Components, Stripe, Drive API,<br></br>and Redux.
          </p>
          <button>
            <a href="https://www.tortasmexico-studiocity.com/">Live App</a>
          </button>
          <button>
            <a href="https://github.com/Jose-Escobedo/MERN-Tortas-Frontend">
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
    background: linear-gradient(#010106, var(--background-dark-grey))
      padding-box;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4em 2em;
    position: relative;
    img {
      width: 95%;
      object-fit: cover;
    }

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      padding: 2em 0;
    }
  }
  .project-img-border {
    width: 70%;
    transition: transform 0.5s;
    &:hover {
      transform: scale(0.95);
    }
  }
  .project-desc-container {
    display: flex;
    flex-direction: column;
    z-index: 99;
    width: 45%;
    @media screen and (max-width: 1100px) {
      width: 90%;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin-top: 1em;
    }

    h2 {
      font-size: 2rem;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      color: var(--white-color);
      @media screen and (max-width: 670px) {
        font-size: 1.7rem;
      }
    }
    h3 {
      font-size: 1rem;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      color: var(--primary-color);
      padding-bottom: 1.2em;
    }
    p {
      font-size: 0.85rem;
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      line-height: 1.5em;
      color: var(--white-color);
      padding-bottom: 1.2em;
      @media screen and (max-width: 670px) {
        font-size: 0.75rem;
      }
    }
    button {
      padding: 0.5em 0.5em;
      font-size: 0.8rem;
      width: 30%;
      border: none;
      color: var(--white-color);
      border-bottom: 1px solid var(--primary-color);
      background: none;
      display: inline-block;
      text-transform: uppercase;
      position: relative;
      cursor: pointer;
      @media screen and (max-width: 1200px) {
        font-size: 0.5rem;
        width: 40%;
      }
      @media screen and (max-width: 1100px) {
        font-size: 0.5rem;
        width: 30%;
      }
      @media screen and (max-width: 670px) {
        width: 40%;
        font-size: 0.45rem;
      }
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
