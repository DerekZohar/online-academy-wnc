import { CircularProgress, GridList, GridListTile } from "@material-ui/core";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import CourseItem from "./course-item";
import CircularProgressWithLabel from "./progress-with-label";
import "./styles.css";

export default function LearnCourse() {
  const courses = [
    {
      url: "https://www.youtube.com/watch?v=KDkEDoIXm5U",
      tick: false,
    },
    {
      url: "https://www.youtube.com/watch?v=w-jjEI-mUxA",
      tick: false,
    },
    {
      url: "https://www.youtube.com/watch?v=2Oz_d2q7GQQ",
      tick: false,
    },
    {
      url: "https://www.youtube.com/watch?v=Llw4Pv2M6d0",
      tick: false,
    },
  ];
  const [itemClicked, setItemClicked] = useState(courses[0].url);
  const handItemClick = (idx: any) => {
    console.log(idx);
    setItemClicked(idx.url);
  };
  const [progress, setProgress] = React.useState(10);
  return (
    <div className="learn-course">
      <div className="video-course">
        <ReactPlayer
          width="100%"
          height="100%"
          url={itemClicked}
          controls
          playing={true}
        />
      </div>
      <div className="courses">
        <div className="header-course-content">
          <h2 className="course-content">Course content</h2>
          <CircularProgressWithLabel value={progress} />
        </div>
        <GridList
          cellHeight={70}
          style={{
            margin: 0,
            height: "600px",
            transform: "translateZ(0)",
          }}
          cols={1}
        >
          {courses.map((url: any, idx: number) => (
            <GridListTile key={idx} style={{ backgroundColor: itemClicked }}>
              <CourseItem id={idx} url={url} onClick={handItemClick} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
