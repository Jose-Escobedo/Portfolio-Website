import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .nav-items {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem 0;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      border-radius: 50%;
      border: 1px solid black;
      margin: 0.25rem 0;
      background: #3a4f66;
      a {
        display: block;
        position: relative;
        z-index: 4;
        padding: 0.5rem 0;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 3;
          opacity: 0.21;
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
