import CarouselBanner from "../../components/home-details/carousel-banner";
import CarouselTopic from "../../components/home-details/carousel-topic";
import MultiCarouselMostView from "../../components/home-details/multicarousel-most-view";
import React from "react";

import MultiCarouselNew from "../../components/home-details/multicarousel-new";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  const history = useHistory();
  const user = useSelector((state: any) => state.user.value);
  if (user.roleId === 3) history.push("/admin/categories-management");
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
