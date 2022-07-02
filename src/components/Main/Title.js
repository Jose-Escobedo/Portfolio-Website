import React from "react";
import styled from "styled-components";
const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  position: relative;

  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      min-height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      min-width: 3.5rem;
      min-height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      position: absolute;
      top: 0;
      left: 0;
      top: 30%;
      z-index: -1;
    }

    @media screen and (max-width: 750px) {
      font-size: 1.7rem;
      span {
        font-size: 3.7rem;
      }
    }

    @media screen and (max-width: 650px) {
      font-size: 1.5rem;
      span {
        font-size: 2.8rem;
      }
    }

    @media screen and (max-width: 535px) {
      font-size: 1.2rem;
      span {
        font-size: 2.4rem;
      }
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;

      &::before {
        min-width: 3rem;
        min-height: 0.1rem;
      }
      &::after {
        min-width: 1.5rem;
        min-height: 0.1rem;
      }
      span {
        font-size: 1.9rem;
      }
    }
  }
`;

export default Title;
