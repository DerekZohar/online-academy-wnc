import { GridList, GridListTile } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "../page-not-found";
import CourseItem from "./course-item";
import CircularProgressWithLabel from "./progress-with-label";
import "./styles.css";

export default function LearnCourseItem() {
  let { courseId }: { courseId: string } = useParams();
  const [isExistCourse, setIsExistCourse] = useState(false);

  const [lessons, setLessons] = useState([{ videoUrl: "" }]);
  const user = useSelector((state: any) => state.user.value);

  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://14.225.27.135/api/course/" + courseId, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setLessons(res.data.lessons);
            console.log(res.data.lessons);
            setIsExistCourse(true);
          }
        })
        .catch((e) => {});
    }
    fetchData();
  }, [courseId, user.token]);

  // const courses = [
  //   {
  //     url: "https://www.youtube.com/watch?v=KDkEDoIXm5U",
  //     tick: false,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=w-jjEI-mUxA",
  //     tick: false,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=2Oz_d2q7GQQ",
  //     tick: false,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=Llw4Pv2M6d0",
  //     tick: false,
  //   },
  // ];

  const [itemClicked, setItemClicked] = useState(lessons[0].videoUrl);
  const handItemClick = (idx: any) => {
    setItemClicked(idx);
  };
  const [progress, setProgress] = React.useState(10);

  if (isExistCourse === false) return <PageNotFound />;
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
          {lessons.map((item: any, idx: number) => (
            <GridListTile key={idx} style={{ backgroundColor: itemClicked }}>
              <CourseItem
                id={idx}
                url={item.videoUrl}
                onClick={handItemClick}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
