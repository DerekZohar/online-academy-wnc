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
import "swiper/components/pagination/pagination.scss";
import HoverRating from "../../course-details/rating";
import { useHistory } from "react-router-dom";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

export default function CarouselBanner({ courses }: { courses: any }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/category/web/1");
  };
  return (
    <Swiper
      id="swiper-color"
      effect="fade"
      width={1920}
      height={500}
      navigation
      speed={400}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      longSwipes
      autoplay
      loop
      spaceBetween={5}
      slidesPerView={1}
    >
      {Array.from(Array(5)).map((el, i) => {
        return (
          <SwiperSlide
            key={`slide-${i}`}
            style={{
              listStyle: "none",
              display: "relative",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <div className="slide-container">
              <img
                className="slide"
                src={`https://picsum.photos/id/${i + 1}/1920/500`}
                alt={`Slide ${i}`}
              />
            </div>
            <div className="course-caption">
              <p>Johnathan</p>
              <h2>The Complete WordPress Website Course</h2>
              <HoverRating ratingNumber={3} ratingOnly={true} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
