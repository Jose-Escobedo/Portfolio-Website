import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import { MainContentStyled } from "./components/Main/MainContentElements";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Particle from "./components/Particle";

function App() {
  return (
    <StyledApp>
      <Particle />
      <Sidebar />
      <MainContentStyled>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </StyledApp>
  );
}

export const StyledApp = styled.div``;
export default App;
