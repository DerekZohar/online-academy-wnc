import CarouselBanner from "../../components/home-details/carousel-banner";
import CarouselTopic from "../../components/home-details/carousel-topic";
import MultiCarousel from "../../components/home-details/multicarousel";
import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function HomePage() {
  const [courseCB, setcourseCB] = useState([]);
  console.log(process.env.REACT_APP_API_COURSES);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_COURSES}`).then((res) => {
      setcourseCB(res.data);
    });
  }, []);

  return (
    <div>
      <CarouselBanner courses={courseCB} />
      <MultiCarousel />
      <MultiCarousel />
      <CarouselTopic />
      <MultiCarousel />
    </div>
  );
}
