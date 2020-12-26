import { Radio } from "@material-ui/core";
import React from "react";
import HoverRating from "../../../course-details/rating";

export default function ratingRadioButton({
  rating,
  handleClick,
}: {
  rating: number;
  handleClick: any;
}) {
  return (
    <div>
      <Radio onClick={handleClick} />
      <HoverRating ratingNumber={rating} ratingOnly={true} />
    </div>
  );
}
