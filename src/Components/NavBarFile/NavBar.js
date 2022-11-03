import React, { useState } from "react";
import logo from "../../Assets/Pictures/Logo.png";
import "./Style_NavBar/navBar.css";
import { BsSearch, BsPersonCircle, BsJustify, BsXLg } from "react-icons/bs";
import NavBarMenuList from "./NavBarMenuList";
import { Link, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [navBarMenus, setnavBarMenus] = useState(false);
  const [navBar, setnavBar] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [accountDisplayDropDown, setAccountDisplayDropDown] = useState(false);
  const [authenStatus, setAuthenStatus] = useState(true);
  const NavBar_Account_logout = [
    {
      id: 0,
      type: 1,
      menuTitle: "Login",
      href: "/Authentication",
    },
    {
      id: 1,
      menuTitle: "Create Account",
      href: "/Authentication",
    },
  ];
  const NavBar_Account_login = [
    {
      id: 0,
      type: 1,
      menuTitle: props.userEmail,
    },
    {
      id: 1,
      type: 1,
      menuTitle: "Logout",
      functionOnclick: props.functionOnclick,
    },
    {
      id: 2,
      type: 1,
      menuTitle: "Account Info",
      href: "/Setting/AccountInfo",
    },
  ];

  const navBarMenusHandller = () => {
    setnavBarMenus(!navBarMenus);
    //click account or navbar menus then fog background animation will run for both
    if (navBarMenus === false) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }

    setSearchDisplay(false);
    setAccountDisplayDropDown(false);
  };

  const navBarAccountHandller = () => {
    setAccountDisplayDropDown(!accountDisplayDropDown);
    if (accountDisplayDropDown === false) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
    setnavBarMenus(false);
    setSearchDisplay(false);
  };
  return (
    <div className={navBar ? "navBarContainer" : "transparentNavBarContainer"}>
      <div className="logo_container">
        <img src={logo} alt="Website logo" className="logo" />
        <button
          className="navBarSearchButton"
          onClick={() => {
            setSearchDisplay(!searchDisplay);
            setnavBarMenus(false);
            setAccountDisplayDropDown(false);
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

        <button className="navBarAccountButton" onClick={navBarAccountHandller}>
          <BsPersonCircle size={30} />
        </button>
      </div>
      <div className={navBarMenus ? "navBar_Menu" : "removeNavBar_Menu"}>
        <NavBarMenuList
          NavBar_Menus={props.NavBar_Menus}
          navBarMenusHandller={navBarMenusHandller}
        />
      </div>
      <div
        className={
          accountDisplayDropDown ? "dropDownDisplay" : "removeDropDownDisplay"
        }
      >
        {props.authenStatus ? (
          <NavBarMenuList
            NavBar_Menus={NavBar_Account_login}
            navBarMenusHandller={navBarAccountHandller}
            functionOnclick={props.functionOnclick}
          />
        ) : (
          <NavBarMenuList
            NavBar_Menus={NavBar_Account_logout}
            navBarMenusHandller={navBarAccountHandller}
          />
        )}
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
