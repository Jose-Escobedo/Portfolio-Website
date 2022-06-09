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
            <div className="icon i-linkedin">
              <FaLinkedin />
            </div>
            <div className="icon i-github">
              <FaGithub />
            </div>
            <div className="icon i-medium">
              <FaMedium />
            </div>
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
