import { Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import HoverRating from "../course-details/rating";
import "./styles.css";

export default function Course({
  imgUrl,
  title,
  description,
  authors,
  people,
  rating,
  price,
  discount,
}: {
  imgUrl: string;
  title: string;
  description: string;
  authors: string;
  people: number;
  rating: number;
  price: number;
  discount: number;
}) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/category/web/1");
  };
  return (
    <div className="course" onClick={handleClick}>
      <img className="image-course" src={imgUrl} alt={title} />
      <div className="info">
        <p className="course-title">{title}</p>
        <p className="description">{description}</p>
        <div className="row-icon-group">
          <div className="row">
            <Face />
            <p className="authors">{authors}</p>
          </div>

          <div className="row">
            <People />
            <p>{formatNumber(people)}</p>
          </div>
        </div>
        <HoverRating ratingNumber={rating} ratingOnly={false} />
      </div>
      <div className="price">
        <p className="current-price">${formatNumber(price * (1 - discount))}</p>
        <p className="old-price">${formatNumber(price)}</p>
      </div>
    </div>
  );
}
