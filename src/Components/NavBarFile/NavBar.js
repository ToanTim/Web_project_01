import React, { useState } from "react";
import logo from "../../Assets/Pictures/Logo.png";
import "./Style_NavBar/navBar.css";
import { BsSearch, BsJustify, BsXLg } from "react-icons/bs";
import NavBarMenuList from "./NavBarMenuList";


const NavBar = (props) => {
  const [navBarMenus, setnavBarMenus] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);

  const navBarMenusHandller = () => {
    setnavBarMenus(!navBarMenus);
    setSearchDisplay(false);
  };
  return (
    <div
      className={navBarMenus ? "navBarContainer" : "transparentNavBarContainer"}
    >
      <div className="logo_container">
        <img src={logo} alt="Website logo" className="logo" />
        <button
          className="navBarSearchButton"
          onClick={() => {
            setSearchDisplay(!searchDisplay);
            setnavBarMenus(false);
          }}
        >
          <BsSearch size={30} />
        </button>

        <button className="navBarMenuButton" onClick={navBarMenusHandller}>
          {navBarMenus ? (
            <BsXLg style={{ color: "black" }} size={30} />
          ) : (
            <BsJustify size={30} />
          )}
        </button>
      </div>
      <div className={navBarMenus ? "navBar_Menu" : "removeNavBar_Menu"}>
        <NavBarMenuList
          NavBar_Menus={props.NavBar_Menus}
          navBarMenusHandller={navBarMenusHandller}
        />
      </div>
      <div className={searchDisplay ? "mainInput" : "removeMainInput"}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="What to eat today?"
        />
      </div>
    </div>
  );
};

export default NavBar;
