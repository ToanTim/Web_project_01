import React, { useEffect, useState } from "react";
import SlideComponent from "./SlideComponent";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./StyleSwiperSlide/Swiper.css";

import database from "../../Backend/FirebaseDB.js";
import { getData } from "../../Backend/DataHandler.js";
import { getDatabase } from "firebase/database";
import { ref, set, get, update, remove, child } from "firebase/database";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const database = getDatabase();

  useEffect(() => {
    getData(setData, "data");
  }, []);

  /*   title={data.name}
              author={data.author}
              postDate={data.post_date} 
              {data.map((item) => (
            <SwiperSlide>
              <SlideComponent image={item.image}></SlideComponent>
            </SwiperSlide>
          ))}*/

  return (
    <div className="swiperContainer">
      <div className="swiperHeader">
        <p style={{ color: "brown" }}>Our Blog</p>
        <h1>Ours Latest Posts</h1>
      </div>
      <div className="mySwiper">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            325: {
              width: 325,
              slidesPerView: 1,
            },

            // when window width is >=  670px
            670: {
              width: 670,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide>
              <SlideComponent
                post_data={item}
                image={item.image}
                title={item.name}
                author={item.author}
                postDate={item.post_date}
                postUpdate={item.post_update}
                intro={item.intro}
                id={item.id}
              ></SlideComponent>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
