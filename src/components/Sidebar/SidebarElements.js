import styled from "styled-components";

export const SidebarStyled = styled.div`
  width: 5rem;
  min-height: 50vh;
  position: fixed;
  top: 25%;
  z-index: 100;
  @media screen and (max-width: 480px) {
    width: 100vw;
    top: 80%;
    position: fixed;
    height: 20vh;
  }
`;
