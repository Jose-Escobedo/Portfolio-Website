import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";

const NavListData = () => {
  const [items, setItems] = useState([
    { name: "Home", route: "/", icon: FaHome },
    { name: "About", route: "/about", icon: BsFillPersonFill },
    {
      name: "Projects",
      route: "/projects",
      icon: FaCode,
    },
    { name: "Contact", route: "/contact", icon: FaPhoneAlt },
  ]);

  const list = items.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <NavLink to={item.route}>{item.icon}</NavLink>
        <NavLink to={item.route}>
          <span className="icon_title">{item.name}</span>
        </NavLink>
      </li>
    );
  });
  return list;
};

export default NavListData;
