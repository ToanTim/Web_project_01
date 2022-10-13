import React, { useState } from "react";
import logo from "../../Assets/Pictures/Logo.png";
import "./Style_NavBar/navBar.css";
import { BsSearch, BsJustify, BsXLg } from "react-icons/bs";
import NavBarMenuList from "./NavBarMenuList";
const NavBar_Menus = [
  {
    id: 0,
    type: 1,
    menuTitle: "ABOUT",
    href: "#about",
  },
  {
    id: 1,
    type: 2,
    menuTitle: "FOOD BLOG",
    href: "/food-blog",
  },
  {
    id: 2,
    type: 2,
    menuTitle: "RESTAURANT?",
    href: "/restaurant",
  },
  {
    id: 3,
    type: 1,
    menuTitle: "CONTACT",
    href: "#contact",
  },
  {
    id: 4,
    type: 1,
    menuTitle: "NEWSLETTER",
    href: "#new-letter",
  },
];

const NavBar = (props) => {
  const [navBarMenus, setnavBarMenus] = useState(false);

  const navBarMenusHandller = () => {
    setnavBarMenus(!navBarMenus);
    props.setSearchDisplay({ searchDisplay: false });
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
            props.setSearchDisplay({
              searchDisplay: !props.searchDisplayValue,
            });
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
        <NavBarMenuList NavBar_Menus={NavBar_Menus} />
      </div>
    </div>
  );
};

export default NavBar;
