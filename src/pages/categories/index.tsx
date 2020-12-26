import { Radio } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Course from "../../components/course";
import FilterCourse from "../../components/filter-course";

import "./styles.css";

export default function CategoryDetails() {
  let { courseName }: { courseName: string } = useParams();
  console.log(courseName);
  const rates = [4.5, 4, 3.5, 3];
  const course = {
    imgUrl:
      "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?yytG3JZ7tYO72YREFLuJZFmzcVBR1tht6FhV7r20dE1cYJI0EmPQGP5Q_UJXbjnNVdrVKCFtylxND-SIeZhKp5viPP0VHThFLzlO98p1Fc1J9rpF58mDvLro--5NB3Y",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    authors: "NVT",
    people: 137190,
    rating: 4.6,
    price: 120,
    discount: 0.8,
  };

  const [courses, setCourses] = useState(course);
  const changeCourse = (rating: number) => {
    //change course follow rating value
    console.log("change course" + rating);
  };
  return (
    <div className="category">
      <p>All Development courses</p>
      <div className="course-div">
        <div className="course-left">
          <FilterCourse changeCourse={changeCourse} />
        </div>
        <div className="course-right">
          <Course {...course} />
          <Course {...course} />
          <Course {...course} />
          <Course {...course} />
          <Course {...course} />
          <Course {...course} />
        </div>
      </div>
    </div>
  );
}
