import styled from "styled-components";

export const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .home {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 70%;
    h1 {
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      animation-duration: 1.4s;
      animation-timing-function: cubic-bezier(0.21, 1.11, 0.81, 0.99);
      animation: moveInLeft 1s ease-out;
    }
    @keyframes moveInLeft {
      0% {
        opacity: 0;
        transform: translate(-150px);
      }

      100% {
        opacity: 1;
        transform: translate(0px);
      }
    }
    p {
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      animation-duration: 1.4s;
      animation-timing-function: cubic-bezier(0.21, 1.11, 0.81, 0.99);
      animation: moveInRight 1s ease-out;
    }
    @keyframes moveInRight {
      0% {
        opacity: 0;
        transform: translate(150px);
      }

      100% {
        opacity: 1;
        transform: translate(0px);
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    animation: moveInBottom 0.7s 1.2s;
    animation-fill-mode: backwards;
    animation-timing-function: cubic-bezier(0.21, 1.11, 0.81, 0.99);
    @keyframes moveInBottom {
      0% {
        opacity: 0;
        transform: translateY(150px);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      &:hover {
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
      svg {
        margin: 0.5rem;
      }
    }
  }
`;
