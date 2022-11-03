import React from "react";
import "./Style_NavBar/navBar_menu.css";
import { Link, useNavigate } from "react-router-dom";

const NavBarMenuList = (props) => {
  const navigate = useNavigate();
  return (
    <div className="navBar_menu_container">
      <ul>
        {props.NavBar_Menus.map((item) => (
          <li className="navBar_Link">
            <a
              href={item.href}
              onClick={() => {
                props.navBarMenusHandller();
                if (item.menuTitle === "Logout") {
                  props.functionOnclick();
                  navigate("/");
                  console.log("logout successfull");
                }
              }}
            >
              {item.menuTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarMenuList;
