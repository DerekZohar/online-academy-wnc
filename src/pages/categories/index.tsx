import React from "react";
import { useParams } from "react-router-dom";
import Course from "../../components/course";
import FilterCourse from "../../components/filter-course";

import "./styles.css";

export default function CategoryDetails() {
  let { categoryName }: { categoryName: string } = useParams();
  console.log(categoryName);
  // const rates = [4.5, 4, 3.5, 3];
  const course = {
    _id: "5ff693bd9c016639ac03c93c",
    price: 0,
    rating: 0,
    discount: 0,
    name: "Advanced HTML course",
    teacherId: "5ff5733e628d5a0da0ace07b",
    samplePictures: [],
    createdDate: "2021-01-07T04:53:17.899Z",
    lastEdited: "2021-01-07T04:53:17.899Z",
    __v: 3,
    teacher: {
      _id: "5ff5733e628d5a0da0ace07b",
      email: "tranthuanthanh@gmail.com",
      firstName: "Tran",
      lastName: "Thanh",
      __v: 0,
    },
    subCategory: {
      _id: "5fecc976a705d61b5cf603cd",
      categoryName: "HTML",
    },
    category: {
      categoryName: "Web",
      id: "5fecc59582979f0bc81cc81f",
    },
  };

  // const [courses, setCourses] = useState(course);
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
