import React from "react";
import { HomePageStyled } from "../components/Home/HomeElements";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="home">
        <div className="typography">
          <h1>
            Hi I'm <span>Jose Escobedo</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis malesuada mauris, nec pharetra risus nec. Sed sagittis
            aliquet.
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
