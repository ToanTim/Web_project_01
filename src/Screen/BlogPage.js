import React, { Component } from "react";
import NavBar from "../Components/NavBarFile/NavBar";
import "./Style/Blog_Page.css";
export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { searchDisplay: false };
    this.searchDisplayUpdate = this.searchDisplayUpdate.bind(this);
  }

  //this function use to change state of searchDisplay
  //check document section 1: NavBar
  searchDisplayUpdate(nextState) {
    this.setState(nextState);
  }
  render() {
    return (
      <div>
        <NavBar
          setSearchDisplay={this.searchDisplayUpdate}
          searchDisplayValue={this.state.searchDisplay}
        />
        BlogPage
      </div>
    );
  }
}
