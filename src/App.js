import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/Main/MainContent";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <MainContent />
    </StyledApp>
  );
}

export const StyledApp = styled.div``;
export default App;
