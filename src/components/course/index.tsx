import { Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import HoverRating from "../course-details/rating";
import "./styles.css";

export default function Course({
  _id,
  price,
  rating,
  discount,
  name,
  teacherId,
  samplePictures,
  createdDate,
  lastEdited,
  __v,
  teacher,
  subCategory,
  category,
}: {
  _id: any;
  price: any;
  rating: any;
  discount: any;
  name: any;
  teacherId: any;
  samplePictures: any;
  createdDate: any;
  lastEdited: any;
  __v: any;
  teacher: any;
  subCategory: any;
  category: any;
}) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/course/" + _id);
  };
  return (
    <div className="course" onClick={handleClick}>
      <img
        className="image-course"
        src={
          samplePictures[0].pictureUrl
            ? samplePictures[0].pictureUrl
            : "https://designshack.net/wp-content/uploads/placeholder-image.png"
        }
        alt={""}
      />
      <div className="info">
        <p className="course-title">{name}</p>
        <p className="description">{"description"}</p>
        <div className="row-icon-group">
          <div className="row">
            <Face />
            <p className="authors">
              {teacher.firstName.concat(" " + teacher.lastName)}
            </p>
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
