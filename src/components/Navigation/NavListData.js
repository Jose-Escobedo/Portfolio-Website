import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavListData = () => {
  const [items, setItems] = useState([
    { name: "Home", route: "/", isActive: false },
    { name: "About", route: "/about", isActive: false },
    { name: "Resume", route: "/resume", isActive: false },
    { name: "Projects", route: "/projects", isActive: false },
    { name: "Blog", route: "/blog", isActive: false },
    { name: "Contact", route: "/contact", isActive: false },
  ]);

  const handleClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((e, i) => ({ ...e, isActive: i === index }))
    );
  };

  const list = items.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <NavLink
          onClick={() => handleClick(index)}
          to={item.route}
          className={item.isActive ? "active-class" : null}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });
  return list;
};

export default NavListData;
