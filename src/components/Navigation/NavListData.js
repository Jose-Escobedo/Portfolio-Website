import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";

const NavListData = () => {
  const [items, setItems] = useState([
    { name: "Home", route: "/", icon: FaHome, isActive: false },
    { name: "About", route: "/about", icon: BsFillPersonFill, isActive: false },
    {
      name: "Experience",
      route: "/experience",
      icon: RiTeamFill,
      isActive: false,
    },
    {
      name: "Projects",
      route: "/projects",
      icon: FaCode,
      isActive: false,
    },
    { name: "Resume", route: "/resume", icon: IoIosPaper, isActive: false },
    { name: "Contact", route: "/contact", icon: FaPhoneAlt, isActive: false },
  ]);

  const list = items.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <NavLink to={item.route} className={"sidebar-link"}>
          {item.icon}
        </NavLink>
      </li>
    );
  });
  return list;
};

export default NavListData;

// const handleClick = (index) => {
//   setItems((prevItems) =>
//     prevItems.map((e, i) => ({ ...e, isActive: i === index }))
//   );
// };

// const list = items.map((item, index) => {
//   return (
//     <li key={index} className="nav-item">
//       <NavLink
//         onClick={() => handleClick(index)}
//         to={item.route}
//         className={item.isActive ? "active-class" : null}
//       >
//         {item.name}
//       </NavLink>
//     </li>
//   );
// });
// return list;

// const [items, setItems] = useState([
//   { name: "Home", route: "/", isActive: false },
//   { name: "About", route: "/about", isActive: false },
//   { name: "Resume", route: "/resume", isActive: false },
//   { name: "Projects", route: "/projects", isActive: false },
//   { name: "Blog", route: "/blog", isActive: false },
//   { name: "Contact", route: "/contact", isActive: false },
// ]);
