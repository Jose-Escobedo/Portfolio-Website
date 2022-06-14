import React from "react";
import { NavigationStyled } from "./NavigationElements";
import NavListData from "./NavListData";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="nav-items">
        <NavListData />
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;

{
  /* <footer className="footer">
  <p>@2022 My Portfolio Website</p>
</footer>; */
}
