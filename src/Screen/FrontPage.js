import React, { Component } from "react";
import backGroundVideo from "../Assets/Videos/backgroundVideo.mp4";
import "./Style/Front_Page_Style.css";
import VideoPlayer from "react-background-video-player";
/* 
<VideoPlayer
          className="video"
          src={backGroundVideo}
          autoPlay={true}
          muted={true}
        /> */
export default class FrontPage extends Component {
  render() {
    return (
      <div className="front_page_div">
        <div className="video">
          <VideoPlayer src={backGroundVideo} autoPlay={true} muted={true} />
        </div>
        <div className="mainInput">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Tell us what do you want to know about Vietnam?"
          />
        </div>
      </div>
    );
  }
}
