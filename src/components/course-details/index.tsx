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
import React from "react";
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
  let { webId }: { webId: string } = useParams();
  console.log(webId);

  const user = useSelector((state: any) => state.user.value);
  const course = {
    id: "123",
    cost: 100,
    title: "Python Programmers",
    summary: "Learn features and constructs for Python",
    descriptions: {
      title: "About this Course",
      content: [
        "Python for Programmers is designed for students who are familiar with a programming language and wish to learn Python.",
        "This course focuses on 'how' as opposed to 'what'. For example, in the lesson on functions, we do not teach what a function is, but rather how to create a function in C++.",
        "The lessons are taught by several different instructors who have used Python in their professional careers, so students get to experience different perspectives.",
        "The course also includes comments and tips from Bjarne Stroustrup - the original designer of Python.",
      ],
    },
    // timeline: "24:10",
    // skillLv: "Intermediate",
    // includedInProduct: [
    //   "Rich Learning Content",
    //   "Taught by Industry Pros",
    //   "Interactive Quizzes",
    //   "Self-Paced Learning",
    // ],
    rating: {
      rateNum: 4.6,
      studentRateNum: 333905,
    },
    studentNum: 1170294,
    sale: 91,
    lastUpdate: "1/1/2020",
    relativeCourse: [
      {
        title: "Python Programmers",
        rating: {
          rateNum: 4.6,
          studentRateNum: 333905,
        },
        studentNum: 1170294,
        sale: 91,
        lastUpdate: "1/1/2020",
        timeline: "24:10",
        price: 11.99,
      },
      {
        title: "Python Programmers",
        rating: {
          rateNum: 4.6,
          studentRateNum: 333905,
        },
        studentNum: 1170294,
        sale: 91,
        lastUpdate: "1/1/2020",
        timeline: "24:10",
        price: 11.99,
      },
      {
        title: "Python Programmers",
        rating: {
          rateNum: 4.6,
          studentRateNum: 333905,
        },
        studentNum: 1170294,
        sale: 91,
        lastUpdate: "1/1/2020",
        timeline: "24:10",
        price: 11.99,
      },
      {
        title: "Python Programmers",
        rating: {
          rateNum: 4.6,
          studentRateNum: 333905,
        },
        studentNum: 1170294,
        sale: 91,
        lastUpdate: "1/1/2020",
        timeline: "24:10",
        price: 11.99,
      },
      {
        title: "Python Programmers",
        rating: {
          rateNum: 4.6,
          studentRateNum: 333905,
        },
        studentNum: 1170294,
        sale: 91,
        lastUpdate: "1/1/2020",
        timeline: "24:10",
        price: 11.99,
      },
    ],
  };

  const [checkBox, setCheckBox] = React.useState(false);
  const dispatch = useDispatch();
  const handleCheckBox = () => {
    if (user.token) {
      console.log(course.id);
      dispatch(addFavCourse({ id: course.id }));
      setCheckBox(!checkBox);
    }
  };
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.banner_left_part}>
          <p className={styles.costCourse}>
            {course.cost === 0
              ? "Free Course"
              : "$" + (course.cost * (100 - course.sale)) / 100}
          </p>
          <div className={styles.underline}></div>
          <p className={styles.course_title}>{course.title}</p>
          <p className={styles.course_summary}>{course.summary}</p>
          <HoverRating
            ratingNumber={course.rating.rateNum}
            ratingOnly={false}
          ></HoverRating>
          <div className={classes.numGroup}>
            <p>{formatNumber(course.rating.studentRateNum) + " ratings"}</p>
            <p>{formatNumber(course.studentNum) + " students"}</p>
          </div>
          <p>
            Last Update: <span>{course.lastUpdate}</span>
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
          src="https://images.idgesg.net/images/article/2019/03/c-plus-plus_code-100790020-large.jpg"
          alt=""
          className={styles.banner_right_part}
        />
      </div>

      <div className={styles.description}>
        <div className={styles.description_left_part}>
          <p className={styles.descriptions_title}>
            {course.descriptions.title}
          </p>
          <div className={styles.content}>
            {course.descriptions.content.map((item, index) => {
              return (
                <p key={index} className={styles.description_item}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.description_right_part}>
          <div className={styles.cts_group}>
            <div>
              <p className={styles.descriptions_title}>COURSE COST</p>
              <div className={classes.costCourseGroup}>
                <p>
                  {course.cost === 0
                    ? "Free"
                    : "$" + (course.cost * (100 - course.sale)) / 100}
                </p>
                <div className={classes.saleOffGroup}>
                  <p className={classes.oldCost}>${course.cost}</p>
                  <span className={classes.saleOff}> {course.sale}% off</span>
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

      <CourseGroup course={course.relativeCourse}></CourseGroup>

      <AuthorCard></AuthorCard>
      <StudentFeedback></StudentFeedback>
    </div>
  );
}
