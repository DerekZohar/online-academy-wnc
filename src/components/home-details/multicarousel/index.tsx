import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "./styles.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import "swiper/components/pagination/pagination.scss";
import HoverRating from "../../course-details/rating";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { formatNumber } from "../../../helpers/formatNumber";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

export default function MultiCarousel() {
  return (
    <div className="multicarousel">
      <h2 className="most-view">Most View</h2>
      <Swiper
        id="multicarousel-container"
        width={1200}
        height={500}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        speed={400}
        // pagination={{
        //   clickable: true,
        // }}
        longSwipes
        autoplay
        loop
      >
        {Array.from(Array(10)).map((el, i) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <div className="multicarousel-content">
                <img
                  src={`https://picsum.photos/id/${i + 1}/120/150`}
                  alt={`Slide ${i}`}
                />
                <div className="course-content123">
                  <p>Johnathan</p>
                  <h4>The Complete WordPress Website Course</h4>
                  <HoverRating ratingNumber={3} ratingOnly={true} />
                  <br />
                  <br />
                  <p>
                    Price:{" "}
                    <span className="price-course">${formatNumber(120)}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <Button variant="contained" color="primary" className="prev">
          <ArrowBackIos />
        </Button>
        <ArrowBackIos />
        <div /> */}
      </Swiper>
    </div>
  );
}
