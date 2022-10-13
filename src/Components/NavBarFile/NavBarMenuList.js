import React from "react";
import "./Style_NavBar/navBar_menu.css";
import { HashLink as Link } from "react-router-hash-link";
const NavBarMenuList = (props) => {
  return (
    <div id="navBar_menu_container">
      <ul>
        {props.NavBar_Menus.map((item) => (
          <li className="navBar_Link">
            <Link to={item.href} smooth>
              {item.menuTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarMenuList;
