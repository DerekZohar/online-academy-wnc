import CarouselBanner from "../../components/home-details/carousel-banner";
import CarouselTopic from "../../components/home-details/carousel-topic";
import MultiCarouselMostView from "../../components/home-details/multicarousel-most-view";
import React from "react";

import MultiCarouselNew from "../../components/home-details/multicarousel-new";

export default function HomePage() {
  return (
    <div>
      <CarouselBanner />
      <MultiCarouselMostView />
      <MultiCarouselNew />
      <CarouselTopic />
      {/* <MultiCarousel /> */}
    </div>
  );
}
