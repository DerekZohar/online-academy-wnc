import CarouselBanner from "../../components/home-details/carousel-banner";
import CarouselTopic from "../../components/home-details/carousel-topic";
import MultiCarousel from "../../components/home-details/multicarousel";
import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function HomePage() {
  return (
    <div>
      <CarouselBanner />
      <MultiCarousel />
      <MultiCarousel />
      <CarouselTopic />
      <MultiCarousel />
    </div>
  );
}
