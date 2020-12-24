import { Face, People } from "@material-ui/icons";
import React from "react";
import HoverRating from "../course-details/rating";
import "./styles.css";

export default function Course() {
  return (
    <div className="root">
      <img
        className="image-course"
        src="https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?yytG3JZ7tYO72YREFLuJZFmzcVBR1tht6FhV7r20dE1cYJI0EmPQGP5Q_UJXbjnNVdrVKCFtylxND-SIeZhKp5viPP0VHThFLzlO98p1Fc1J9rpF58mDvLro--5NB3Y"
        alt=""
      />
      <div className="info">
        <p className="course-title">
          Machine Learning A-Z™: Hands-On Python & R In Data Science
        </p>
        <p className="description">
          Learn Python like a Professional Start from the basics and go all the
          way to creating your own applications and games
        </p>
        <div className="row-icon-group">
          <div className="row">
            <Face />
            <p className="authors">NVT</p>
          </div>

          <div className="row">
            <People />
            <p>137.190</p>
          </div>
        </div>
        <HoverRating ratingNumber={5} ratingOnly={false} />
      </div>
      <div className="price">
        <p className="current-price">$11.99</p>
        <p className="old-price">$120.99</p>
      </div>
    </div>
  );
}
