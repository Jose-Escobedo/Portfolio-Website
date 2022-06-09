import React from "react";
import { MainContentStyled } from "./MainContentElements";
import MainPictureWhite from "../../img/MainPictureWhite.jpg";
import HomePage from "../../Pages/HomePage";

const MainContent = () => {
  return (
    <MainContentStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      <HomePage />
    </MainContentStyled>
  );
};

export default MainContent;
