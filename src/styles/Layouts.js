import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 7rem;

  @media screen and (max-width: 480px) {
    padding: 2rem;
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 4rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
