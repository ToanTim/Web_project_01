import React, { useEffect } from "react";
import "./StyleSwiperSlide/Slide.css";
import { BsCalendar2Fill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import FirebaseDB from "../../Backend/FirebaseDB";
import {
  doc,
  getDocFromCache,
  onSnapshot,
  collection,
  query,
  where,
} from "firebase/firestore";

const SlideComponent = (props) => {
  const blogReadLink = "/food-blog/" + props.id;

  return (
    <div className="slideContainer">
      <div className="imageContainer">
        <img className="img_SwiperSlide" src={props.image}></img>
      </div>
      <div className="textContainer">
        <div className="postInfo">
          <div id="swiperSlideDate" className="swiperSlidePostInfo">
            <BsCalendar2Fill color="#C4A484" />
            {props.postDate}
          </div>
          <div id="swiperSlideAuthor" className="swiperSlidePostInfo">
            <BsFillPersonFill color="#C4A484" />
            {props.author}
          </div>
        </div>
        <div className="textSwiperSlide">
          <div className="title_intro_swiper_slide_div">
            <p className="title_intro_swiper_slide">{props.title}</p>
            <p className="intro_swiper_slide">{props.intro}</p>
          </div>
          <div className="button_swiper_slide_div">
            <Link to={blogReadLink} state={props.post_data}>
              <button className="button_swiper_slide">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
