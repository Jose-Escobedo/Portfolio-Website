import React from "react";
import styled from "styled-components";
const ServiceCard = ({ image, title, paragraph }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(3px);
    border-top: 8px solid var(--primary-color);
  }
  .container {
    padding: 1.2em;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      padding: 0.8rem 0;
    }
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1em 0;
      position: relative;
      padding-bottom: 1rem;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }

  @media screen and (max-width: 535px) {
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 435px) {
    .container h4 {
      font-size: 1rem;
    }
    .container img {
      width: 40px;
      height: 40px;
    }
    .container p {
      font-size: 0.7rem;
    }
  }
`;
export default ServiceCard;
