import styled from "styled-components";

export const MainContentStyled = styled.main`
  min-height: 100vh;
  position: relative;
  margin-left: 5rem;
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    z-index: -99;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100%;
      background-color: var(--border-color);
    }
  }
`;
