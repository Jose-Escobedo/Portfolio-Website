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
    .active-class {
      background-color: var(--primary-color);
    }

    li {
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--border-color);
      margin: 0.25em 0;
      transition: all 0.3s ease-out;
      background: #19293b;
      .icon_title {
        display: none;
        font-family: montserrat, sans-serif;
        font-size: 1em;
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
        padding: 0.5rem 0;
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
`;
// footer {
//   border-top: 1px solid var(--border-color);
//   width: 100%;
//   p {
//     padding: 2rem 0;
//     font-size: 1.1rem;
//     display: block;
//     text-align: center;
//   }
// }

// font-weight: 600;
// letter-spacing: 1px;
// text-transform: uppercase;
