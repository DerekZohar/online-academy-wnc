import { Radio } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import FilterCourse from "../../components/filter-course";

import "./styles.css";

export default function CategoryDetails() {
  let { courseName }: { courseName: string } = useParams();
  console.log(courseName);
  const rates = [4.5, 4, 3.5, 3];
  return (
    <div>
      <p>All Development courses</p>

      <div className="course-left">
        <FilterCourse />
      </div>
      <div className="course-right"></div>
    </div>
  );
}
