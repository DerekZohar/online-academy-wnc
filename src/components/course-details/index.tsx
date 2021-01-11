import {
  Button,
  Checkbox,
  createStyles,
  FormControlLabel,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthorCard from "../../components/course-details/author-card";
import CourseContent from "../../components/course-details/course-content";
import HoverRating from "../../components/course-details/rating";
import StudentFeedback from "../../components/course-details/student-feedback";
import CourseGroup from "../../components/course-details/course-group";

import { formatNumber } from "../../helpers/formatNumber";
import styles from "./styles.module.css";
import { Favorite, FavoriteBorder, FavoriteOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavCourse } from "../../pages/login/loginSlice";
import Axios from "axios";
import Course from "../../services/courseInterface";
import { id } from "date-fns/esm/locale";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      width: 300,
      height: 100,
    },
    oldCost: {
      textDecorationLine: "line-through",
    },
    saleOff: {
      fontWeight: "bold",
    },
    saleOffGroup: {
      width: 100,
      display: "flex",
      justifyContent: "space-between",
    },
    costCourseGroup: {
      display: "flex",
      justifyContent: "space-around",
    },
    numGroup: {
      width: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  })
);

export default function CourseDetail() {
  const classes = useStyles();
  let { courseId }: { courseId: string } = useParams();
  // console.log(courseId);
  const [course, setCourse] = React.useState({
    price: 0,
    rating: 0,
    discount: 0,
    name: "",
    teacherId: "",
    categoryId: "",
    subCategoryId: "5fecc976a705d61b5cf603cd",
    samplePictures: [],
    createdDate: "2021-01-07T04:53:17.899Z",
    lastEdited: "2021-01-07T04:53:17.899Z",
    feedback: [
      {
        feedbackHeader: "I love this course",
        feedbackContent: "Good course",
        rating: 5,
        id: "5ffa8d2ecd35c634344df7f9",
      },
    ],
    lessons: [],
    description: "test",
    overview: "test overview",
    id: "",
  });

  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/course/" + courseId).then(
        (res) => {
          setCourse(res.data);
          // console.log(JSON.stringify(course) + "course");
        }
      );
    }
    fetchData();
  }, []);

  const user = useSelector((state: any) => state.user.value);
  // const course = {
  //   id: "123",
  //   cost: 100,
  //   title: "Python Programmers",
  //   summary: "Learn features and constructs for Python",
  //   descriptions: {
  //     title: "About this Course",
  //     content: [
  //       "Python for Programmers is designed for students who are familiar with a programming language and wish to learn Python.",
  //       "This course focuses on 'how' as opposed to 'what'. For example, in the lesson on functions, we do not teach what a function is, but rather how to create a function in C++.",
  //       "The lessons are taught by several different instructors who have used Python in their professional careers, so students get to experience different perspectives.",
  //       "The course also includes comments and tips from Bjarne Stroustrup - the original designer of Python.",
  //     ],
  //   },
  //   // timeline: "24:10",
  //   // skillLv: "Intermediate",
  //   // includedInProduct: [
  //   //   "Rich Learning Content",
  //   //   "Taught by Industry Pros",
  //   //   "Interactive Quizzes",
  //   //   "Self-Paced Learning",
  //   // ],
  //   rating: {
  //     rateNum: 4.6,
  //     studentRateNum: 333905,
  //   },
  //   studentNum: 1170294,
  //   sale: 91,
  //   lastUpdate: "1/1/2020",
  //   relativeCourse: [
  //     {
  //       title: "Python Programmers",
  //       rating: {
  //         rateNum: 4.6,
  //         studentRateNum: 333905,
  //       },
  //       studentNum: 1170294,
  //       sale: 91,
  //       lastUpdate: "1/1/2020",
  //       timeline: "24:10",
  //       price: 11.99,
  //     },
  //     {
  //       title: "Python Programmers",
  //       rating: {
  //         rateNum: 4.6,
  //         studentRateNum: 333905,
  //       },
  //       studentNum: 1170294,
  //       sale: 91,
  //       lastUpdate: "1/1/2020",
  //       timeline: "24:10",
  //       price: 11.99,
  //     },
  //     {
  //       title: "Python Programmers",
  //       rating: {
  //         rateNum: 4.6,
  //         studentRateNum: 333905,
  //       },
  //       studentNum: 1170294,
  //       sale: 91,
  //       lastUpdate: "1/1/2020",
  //       timeline: "24:10",
  //       price: 11.99,
  //     },
  //     {
  //       title: "Python Programmers",
  //       rating: {
  //         rateNum: 4.6,
  //         studentRateNum: 333905,
  //       },
  //       studentNum: 1170294,
  //       sale: 91,
  //       lastUpdate: "1/1/2020",
  //       timeline: "24:10",
  //       price: 11.99,
  //     },
  //     {
  //       title: "Python Programmers",
  //       rating: {
  //         rateNum: 4.6,
  //         studentRateNum: 333905,
  //       },
  //       studentNum: 1170294,
  //       sale: 91,
  //       lastUpdate: "1/1/2020",
  //       timeline: "24:10",
  //       price: 11.99,
  //     },
  //   ],
  // };

  const watchListTemp = localStorage.getItem("watchList");
  const [checkBox, setCheckBox] = React.useState(
    watchListTemp?.includes(courseId)
  );
  const dispatch = useDispatch();
  const handleCheckBox = async () => {
    // console.log(user.token);

    if (checkBox === true) {
      await Axios.delete("http://localhost:3000/api/watchlist/" + courseId, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res) => {
        if (res.status === 200) {
          setCheckBox(false);
          dispatch(addFavCourse(courseId));
          console.log("success");
        }
      });
    }
    if (user.token) {
      await Axios.post(
        "http://localhost:3000/api/watchlist/" + courseId,
        {},
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      ).then((res) => {
        if (res.status === 200) {
          dispatch(addFavCourse(courseId));
          setCheckBox(!checkBox);
        }
      });
    }
    await Axios.get("http://localhost:3000/api/watchlist", {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    }).then((res: any) => {
      if (res.status === 200) {
        localStorage.setItem("watchList", JSON.stringify(res.data));
      }
    });
  };
  // console.log(JSON.stringify(course) + "course");

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.banner_left_part}>
          <p className={styles.costCourse}>
            {course.price === 0
              ? "Free Course"
              : "$" + (course.price * (100 - course.discount)) / 100}
          </p>
          <div className={styles.underline}></div>
          <p className={styles.course_title}>{course.name}</p>
          <p className={styles.course_summary}>{course.overview}</p>
          {course.id === "" ? (
            ""
          ) : (
            <HoverRating
              ratingNumber={course.rating}
              ratingOnly={false}
            ></HoverRating>
          )}
          <div className={classes.numGroup}>
            <p>{formatNumber(123) + " ratings"}</p>
            <p>{formatNumber(123) + " students"}</p>
          </div>
          <p>
            Last Update: <span>{course.lastEdited}</span>
          </p>
          <Button
            variant="contained"
            color="primary"
            style={{
              fontSize: "16px",
              padding: "8px 24px 8px 24px",
              marginTop: 10,
            }}
          >
            Enroll This Course
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"
                checked={checkBox}
                onClick={handleCheckBox}
              />
            }
            label=""
          />
        </div>
        <img
          src={
            course.samplePictures[0]
              ? course.samplePictures[0]
              : "https://designshack.net/wp-content/uploads/placeholder-image.png"
          }
          alt=""
          className={styles.banner_right_part}
        />
      </div>

      <div className={styles.description}>
        <div className={styles.description_left_part}>
          <p className={styles.descriptions_title}>{course.description}</p>
          {/* <div className={styles.content}>
            {course.descriptions.content.map((item, index) => {
              return (
                <p key={index} className={styles.description_item}>
                  {item}
                </p>
              );
            })}
          </div> */}
        </div>
        <div className={styles.description_right_part}>
          <div className={styles.cts_group}>
            <div>
              <p className={styles.descriptions_title}>COURSE COST</p>
              <div className={classes.costCourseGroup}>
                <p>
                  {course.price === 0
                    ? "Free"
                    : "$" + (course.price * (100 - course.discount)) / 100}
                </p>
                <div className={classes.saleOffGroup}>
                  <p className={classes.oldCost}>${course.price}</p>
                  <span className={classes.saleOff}> {course.price}% off</span>
                </div>
              </div>
            </div>
            {/* <div>
        <p className={styles.descriptions_title}>TIMELINE</p>
        <p>{course.timeline}</p>
      </div>
      <div>
        <p className={styles.descriptions_title}>SKILL LEVEL</p>
        <p>{course.skillLv}</p>
      </div> */}
          </div>
          {/* <div className={styles.included_in_product}>
      <p className={styles.descriptions_title}>INCLUDED IN PRODUCT</p>
      <GridList cellHeight={28} className={classes.gridList} cols={2}>
        {course.includedInProduct.map((item, index) => (
          <GridListTile key={index} cols={1}>
            <p>{item}</p>
          </GridListTile>
        ))}
      </GridList>
    </div> */}
        </div>
      </div>

      <CourseContent></CourseContent>

      {/* <CourseGroup course={course.relativeCourse}></CourseGroup> */}

      <AuthorCard></AuthorCard>
      <StudentFeedback></StudentFeedback>
    </div>
  );
}
