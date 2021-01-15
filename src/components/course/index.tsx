import { Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import HoverRating from "../course-details/rating";
import "./styles.css";

export default function Course(props: any) {
  const {
    samplePictures,
    _id,
    name,
    teacherId,
    rating,
    price,
    discount,
  } = props;
  // console.log(samplePictures);
  const history = useHistory();
  const handleClick = () => {
    history.push("/course/" + _id);
  };
  return (
    <div className="course" onClick={handleClick}>
      <img
        className="image-course"
        src={"https://designshack.net/wp-content/uploads/placeholder-image.png"}
        alt={""}
      />
      <div className="info">
        <p className="course-title">{name}</p>
        <p className="description">{"description"}</p>
        <div className="row-icon-group">
          <div className="row">
            <Face />
            {/* <p className="authors">
              {teacher.firstName.concat(" " + teacher.lastName)}
            </p> */}
          </div>

          <div className="row">
            <People />
            <p>{formatNumber(123)}</p>
          </div>
        </div>
        <HoverRating ratingNumber={rating} ratingOnly={false} />
      </div>
      <div className="price">
        <p className="current-price">
          {price === 0 ? "Free" : formatNumber(price * (1 - discount))}
        </p>
        {discount === 0 ? null : (
          <p className="old-price">${formatNumber(price)}</p>
        )}
      </div>
    </div>
  );
}
