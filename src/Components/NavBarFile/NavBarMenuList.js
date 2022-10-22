import React from "react";
import "./Style_NavBar/navBar_menu.css";

const NavBarMenuList = (props) => {
  return (
    <div id="navBar_menu_container">
      <ul>
        {props.NavBar_Menus.map((item) => (
          <li className="navBar_Link">
            <a href={item.href} onClick={props.navBarMenusHandller}>
              {item.menuTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarMenuList;
