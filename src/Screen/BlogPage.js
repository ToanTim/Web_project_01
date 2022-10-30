import React, { Component } from "react";
import NavBar from "../Components/NavBarFile/NavBar";
import "./Style/Blog_Page.css";
export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { searchDisplay: false };
  }

  //this function use to change state of searchDisplay

  render() {
    const NavBar_Menus = [
      {
        id: 0,
        type: 1,
        menuTitle: "HOME",
        href: "/",
      },
      {
        id: 1,

        menuTitle: "ABOUT",
        href: "/#about",
      },
      {
        id: 2,

        menuTitle: "FOOD BLOG",
        href: "/food-blog",
      },
      {
        id: 3,

        menuTitle: "RESTAURANT?",
        href: "/restaurant",
      },
      {
        id: 4,

        menuTitle: "CONTACT",
        href: "/#contact",
      },
      {
        id: 5,

        menuTitle: "NEWSLETTER",
        href: "/#new-letter",
      },
    ];

    return (
      <div>
        <NavBar NavBar_Menus={NavBar_Menus} />
        BlogPage
      </div>
    );
  }
}
