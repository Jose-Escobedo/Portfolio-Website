import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import { MainContentStyled } from "./components/Main/MainContentElements";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </StyledApp>
  );
}

export const StyledApp = styled.div``;
export default App;
