import React from "react";
import { HomePageStyled } from "../components/Home/HomeElements";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="home">
        <div className="typography">
          <h1>
            Hello, I'm <span>Jose Escobedo.</span>
          </h1>
          <p>
            I’m a full stack web developer who loves to build things for the
            web.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/jose-escobedo-89b943232/"
              className="icon i-linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Jose-Escobedo"
              className="icon i-github"
            >
              <FaGithub />
            </a>
            <a
              href="https://medium.com/@escobedo.jose"
              className="icon i-medium"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
