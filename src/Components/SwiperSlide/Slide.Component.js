import React from "react";
import SwiperSlideComponent from "./SwiperSlide.Component.js";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./StyleSwiperSlide/Swiper.css";

import SwiperImage1 from "../../Assets/Pictures/nem.jpg";
import SwiperImage3 from "../../Assets/Pictures/nem.jpg";
import SwiperImage2 from "../../Assets/Pictures/nem.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = () => {
  const text = [
    "Authentic Vietnamese Spring Rolls (Nem Ran Hay Cha Gio)",
    "Use work list and take note",
    "Let's do it and achieve success",
  ];

  const subText = [
    "Vietnamese Fried Spring Rolls are delicious with crispy exterior and flavorful filling. This dish is a must in any traditional Vietnamese banquets or celebrations. I am sharing the authentic way to make them as well as tips to ensure they turn out golden and crispy.",
    "Depending on the regions, the filling may be slightly different, but it usually contains ground pork, shrimp, and a variety of shredded veggies. It is then wrapped with a spring roll wrapper and fried until golden and crispy.",
    "Let's do it and achieve success",
  ];
  /*   autoplay={{
    delay: 2500,
    disableOnInteraction: false,}}

    <SwiperSlide>
        <SwiperSlideComponent
          SwiperImage={SwiperImage2}
          headText={text[1]}
        ></SwiperSlideComponent>
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideComponent
          SwiperImage={SwiperImage3}
          headText={text[2]}
        ></SwiperSlideComponent>
      </SwiperSlide>
  }} */
  return (
    <div className="swiperContainer">
      <div className="swiperHeader">
        <p style={{ color: "orange" }}>Our Blog</p>
        <h1>Ours Latest Posts</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
