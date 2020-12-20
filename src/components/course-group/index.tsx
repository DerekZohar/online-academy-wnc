import React from "react";
import Course from "./course";
import styles from "./course.module.css";

export default function CourseGroup({ course }: { course: any }) {
  return (
    <div className={styles.course_group}>
      <p className={styles.course_title}>Students also bought</p>
      {course.map((item: any, index: number) => {
        return (
          <Course
            key={index}
            title={item.title}
            rating={item.rating.rateNum}
            hours={item.timeline}
            students={item.studentNum}
            price={item.price}
            updated={item.lastUpdate}
          ></Course>
        );
      })}
    </div>
  );
}
