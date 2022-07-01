import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  span {
    font-size: 1em;
  }
  .nav-items {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5em 0;

    li {
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--border-color);
      margin: 0.3em 0;
      transition: all 0.3s ease-out;
      /* background: linear-gradient(var(--primary-color), #003e80) padding-box; */
      background: linear-gradient(#010106, #00254c) padding-box;
      .icon_title {
        display: none;
        font-family: montserrat, sans-serif;
        font-size: 1rem;
        font-weight: 300;
      }

      &:hover .icon_title {
        display: initial;
        margin-left: 0.4em;
        color: var(--white-color);
      }
      &:hover {
        width: min-content;
        padding: 0em 0.5em;
        border-radius: 1em;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
      }
      &:hover::before {
        width: 100%;
        height: 100%;
      }
      a {
        display: block;
        position: relative;
        z-index: 4;
        padding: 0.5em 0;
        transition: all 0.4s ease-in-out;

        &:hover {
          cursor: pointer;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    position: relative;
    justify-content: flex-end;
    animation: fadein 5s ease-in 1;
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .nav-items {
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      padding: 0.5em 1em;
      background-color: rgba(0, 0, 0, 0.5);
      li {
        &:hover .icon_title {
          display: none;
          margin: 0;
        }
        &:hover {
          vertical-align: none;
          border-radius: 30%;
          width: min-content;
          color: var(--primary-color);
        }
        &:hover::before {
          width: auto;
          height: auto;
        }
        a {
          position: relative;
          z-index: 4;
          transition: all 0.4s ease-in-out;
          padding: 0;
          &:hover {
            cursor: pointer;
          }
        }
        a:hover::before {
          width: auto;
          height: auto;
        }
      }
    }
    li {
      margin: 1em 0.5em;
      min-width: 2.2em;
      min-height: 2.2em;
    }
  }
`;
