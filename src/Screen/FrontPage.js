import React, { Component } from "react";
import backGroundVideo from "../Assets/Videos/backgroundVideo.mp4";
import "./Style/Front_Page_Style.css";
import VideoPlayer from "react-background-video-player";
import logo from "../Assets/Pictures/Logo.png";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBarFile/NavBar";

export default class FrontPage extends Component {
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
      <div className="front_page_div">
        <div className="video">
          <VideoPlayer src={backGroundVideo} autoPlay={true} muted={true} />
        </div>
        <NavBar
          setSearchDisplay={this.searchDisplayUpdate}
          searchDisplayValue={this.state.searchDisplay}
        />
        <div
          className={this.state.searchDisplay ? "mainInput" : "removeMainInput"}
        >
          <input
            className="input"
            type="text"
            name="name"
            placeholder="What to eat today?"
          />
        </div>
        <div id="about" className="about_content">
          <h1>hello</h1>
        </div>
        <div id="contact" className="about_content1">
          <h1>hello1</h1>
        </div>
        <div id="new-letter" className="about_content1">
          <h1>hello2</h1>
        </div>
        <div className="about_content1">
          <h1>hello3</h1>
        </div>
      </div>
    );
  }
}
