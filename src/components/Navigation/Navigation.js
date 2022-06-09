import React from "react";
import { NavigationStyled } from "./NavigationElements";
import avatar from "../../img/avatar.jpg";
import { NavLink } from "react-router-dom";
import NavListData from "./NavListData";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className={"avatar"}>
        <img src={avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <NavListData />
      </ul>
      <footer className="footer">
        <p>@2022 My Portfolio Website</p>
      </footer>
    </NavigationStyled>
  );
};

export default Navigation;

{
  /* <li className="nav-item">
          <NavLink to="/home" className="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="active-class">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" className="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="active-class">
            Contact
          </NavLink>
        </li> */
}
