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
import { Button } from "@material-ui/core";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

export default function CarouselTopic() {
  return (
    <div className="multicarousel-topic">
      <h2 className="most-view">Topics recommended for you</h2>
      <Swiper
        id="multicarousel-topic"
        width={1200}
        height={400}
        spaceBetween={30}
        slidesPerView={3}
        // navigation
        pagination={{
          type: "progressbar",
        }}
        speed={600}
        // pagination={{
        //   clickable: true,
        // }}
        longSwipes
        loop
      >
        {Array.from(Array(10)).map((el, i) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <div className="button-group">
                <Button variant="outlined" color="primary">
                  C++
                </Button>
                <Button variant="outlined" color="primary">
                  Python
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
