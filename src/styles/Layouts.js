import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 7rem;

  @media screen and (max-width: 480px) {
    padding: 2rem;
    border: 1px solid red;
    width: 100%;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
