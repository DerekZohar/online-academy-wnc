import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

export default function CarouselBanner() {
  const history = useHistory();
  const handleClick = (id: any) => {
    history.push("/course/" + id);
  };
  const [courseCB, setcourseCB] = useState([
    {
      _id: "",
      price: 0,
      rating: 0,
      discount: 0,
      name: "",
      teacherId: "",
      samplePictures: [],
      createdDate: "",
      lastEdited: "",
      teacher: {
        _id: "",
        email: "",
        firstName: "",
        lastName: "",
        __v: 4,
      },
      subCategory: {
        _id: "",
        categoryName: "",
      },
      category: {
        categoryName: "",
        id: "",
      },
    },
  ]);
  // console.log(process.env.REACT_APP_API_COURSES);
  const user = useSelector((state: any) => state.user.value);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/course?sortmode=2", {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    }).then((res) => {
      setcourseCB(res.data);
    });
  }, []);
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
      {courseCB.map((el, i) => {
        return (
          <SwiperSlide
            key={`slide-${i}`}
            style={{
              listStyle: "none",
              display: "relative",
              cursor: "pointer",
            }}
            onClick={() => handleClick(el._id)}
          >
            <div className="slide-container">
              <img
                className="slide"
                src={`https://picsum.photos/id/${i + 1}/1920/500`}
                alt={`Slide ${i}`}
              />
            </div>
            <div className="course-caption">
              <p>{el.teacher.firstName + el.teacher.lastName}</p>
              <h2>{el.name}</h2>
              <HoverRating ratingNumber={el.rating} ratingOnly={true} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
