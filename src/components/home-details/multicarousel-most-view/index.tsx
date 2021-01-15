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
import "swiper/swiper.min.css";

import "swiper/components/pagination/pagination.scss";
import HoverRating from "../../course-details/rating";
// import { Button } from "@material-ui/core";
// import { ArrowBackIos } from "@material-ui/icons";
import { formatNumber } from "../../../helpers/formatNumber";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

export default function MultiCarouselMostView(props: any) {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Pagination]);
  SwiperCore.use([Autoplay]);
  SwiperCore.use([EffectFade]);

  const history = useHistory();
  const handleClick = (id: any) => {
    history.push("/course/" + id);
  };
  const [courses, setCourses] = useState([
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
    async function fetchData() {
      await Axios.get("http://14.225.27.135/api/course?sortmode=2", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res) => {
        setCourses(res.data);
        console.log(res.data);
      });
    }
    fetchData();
  }, []);

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
        {courses.map((el: any, i: number) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <div
                className="multicarousel-content"
                onClick={() => handleClick(el._id)}
              >
                <img
                  src={`https://picsum.photos/id/${i + 1}/120/150`}
                  alt={`Slide ${i}`}
                />
                <div className="course-content123">
                  <p>{el.teacher.firstName + " " + el.teacher.lastName}</p>
                  <h4>{el.name}</h4>
                  <HoverRating ratingNumber={el.rating} ratingOnly={true} />
                  <br />
                  <br />
                  <p>
                    Price:{" "}
                    <span className="price-course">
                      {el.price === 0 ? "Free" : "$" + formatNumber(120)}
                    </span>
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
