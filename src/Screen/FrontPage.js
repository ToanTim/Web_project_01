import React, { Component } from "react";
import backGroundVideo from "../Assets/Videos/backgroundVideo.mp4";
import "./Style/Front_Page_Style.css";
import VideoPlayer from "react-background-video-player";
import logo from "../Assets/Pictures/Logo.png";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBarFile/NavBar";
import ContentDisplayCompoment from "../Components/ContentsDisplay/ContentDisplayCompoment";
import phoImag from "../Assets/Pictures/pho.jpg";
import nemImag from "../Assets/Pictures/nem.jpg";
import SwiperComponent from "../Components/SwiperSlide/Slide.Component";
import contentAbout from "../Assets/Pictures/contentAbout1.jpg";
import contentContact from "../Assets/Pictures/contentContact.jpg";
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
    const content = [
      {
        id: 0,
        contentText1:
          "Vietnamese food is known for its distinct use of fresh, fragrant and aromatic flavours. There is a balance of sweet and sour, spicy and cooling, fresh and salty flavours (from the Vietnamese staple fermented fish sauce, or ‘nuoc mam’).  ",
        contentText2:
          "Stir fries and noodle soups are common. Towards the south, food becomes sweeter, and mixes flavours from Cambodia and Thailand.The Mekong Delta in the south, aptly named the “the rice bowl” of Vietnam, is incredibly fertile, with a tropical climate, sustaining more rice paddies and coconut groves. In fact, Vietnam rice production is the second biggest rice exporter in the world. Rice is a central part of the Vietnamese diet, and steamed rice is part of almost every meal. It is also transformed into ingredients such as rice noodles, rice paper for spring rolls, rice vinegar, and rice wine.",
      },
      {
        id: 1,
        contentText1:
          "Toan Tran (Tim) student at Tampere University of applied sciences ",
        contentText2:
          "Hi there! thank you for check out my website, I am Toan Tran, I am doing bachelor's degree about computer science at TAMK, I am interested in data analysis and machine learning but web development can be considered as my second interest.",
        contentText3: "Here is my email: toantim.developer@gmail.com ",
        contentText4: "Here is my phone number: +358 468885032 ",
        contentText4: "Here is my Linkedin ",
        contentText5: "Here is my Github ",

        linkedinURL: "https://www.linkedin.com/in/toan-tran-tim/",
        gitHubURl: "https://github.com/ToanTim",
      },
    ];
    return (
      <div className="front_page_div">
        <div id="videoBG" className="video">
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
        <ContentDisplayCompoment
          contentID="about"
          content={content[0]}
          image={phoImag}
          style={{
            marginTop: "100vh",
            backgroundImage: `url(${contentAbout})`,
          }}
        />
        <SwiperComponent />
        <ContentDisplayCompoment
          contentID="contact"
          content={content[1]}
          image={nemImag}
          style={{
            backgroundImage: `url(${contentContact})`,
          }}
        />

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
