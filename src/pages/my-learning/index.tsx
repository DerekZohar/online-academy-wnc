import React from "react";
import "./styles.css";
import MyCourse from "../../components/my-course";
import { useParams } from "react-router-dom";

export default function MyLearning() {
  const course = {
    imgUrl:
      "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?yytG3JZ7tYO72YREFLuJZFmzcVBR1tht6FhV7r20dE1cYJI0EmPQGP5Q_UJXbjnNVdrVKCFtylxND-SIeZhKp5viPP0VHThFLzlO98p1Fc1J9rpF58mDvLro--5NB3Y",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    authors: "NVT",
    people: 137190,
    progress: 70,
  };
  return (
    <div className="Watchlist-Container">
      <h2>My learning</h2>
      <div className="Course-Container">
        <MyCourse {...course} />
        <MyCourse {...course} />
      </div>
    </div>
  );
}
