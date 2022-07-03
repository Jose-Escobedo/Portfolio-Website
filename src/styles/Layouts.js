import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5em;

  @media screen and (max-width: 600px) {
    padding: 2em;
    width: 100%;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
