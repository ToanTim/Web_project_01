import React from "react";
import "./StyleSwiperSlide/Slide.css";
const SwiperSlideComponent = ({
  SwiperImage,
  headText,
  subText1,
  subText2,
}) => {
  return (
    <header className="header">
      <p> {headText}</p>
    </header>
  );
};

export default SwiperSlideComponent;
