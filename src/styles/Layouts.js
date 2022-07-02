import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 7rem;

  @media screen and (max-width: 480px) {
    padding: 2.5rem;
    width: 100%;
    border: 1px solid red;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
