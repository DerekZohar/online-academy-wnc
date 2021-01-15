import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { useFormik } from "formik";
import Axios from "axios";
import { useSelector } from "react-redux";
// import LessonsTree from "../lesson-tree";
const useStyles = makeStyles((theme: Theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
export default function ImageCourse(props: any) {
  const classes = useStyles();
  const user = useSelector((state: any) => state.user.value);
  const { values, setValues, activeStep, isLastStep, handleBack } = props;
  const [courses, setCourses] = React.useState([{ title: "", videoUrl: "" }]);
  const formik = useFormik({
    initialValues: {
      title: "",
      videoUrl: "",
    },
    onSubmit: async (value: any) => {
      setValues({ ...values, lessons: courses });
      // setValues({ ...values, teacherId: user.id });
      // console.log(...values, teacherId: user.id);
      if (isLastStep) {
        await Axios.post(
          "http://localhost:3000/api/course/",
          {
            name: values.name,
            teacherId: user.id,
            categoryId: values.categoryId,
            samplePictures: [
              {
                pictureUrl: values.imgUrl,
              },
            ],
            subCategoryId: "5ffedf190abc6b248ca053bf",
            lessons: [
              {
                order: 1,
                title: "Prerequisites",
                description:
                  "If you need to review JavaScript, we recommend reading this guide",
                content:
                  "We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.",
                videoUrl: "https://youtu.be/gL5HBA_1bDQ",
              },
              {
                order: 2,
                title: "Setup for the Tutorial",
                description:
                  "You can now skip the second setup option, and go to the Overview section to get an overview of React.",
                content:
                  "First, open this Starter Code in a new tab. The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.",
                videoUrl: "https://youtu.be/s6-WS8gLaqc",
              },
              {
                order: 3,
                title: "What Is React?",
                description:
                  "React has a few different kinds of components, but we’ll start with React.Component subclasses",
                content:
                  "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
                videoUrl: "https://www.youtube.com/watch?v=2st10hWzbnU",
              },
              {
                order: 4,
                title: "Inspecting the Starter Code",
                description:
                  "This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.",
                content:
                  "If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code. If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).",
                videoUrl: "https://www.youtube.com/watch?v=orydeLuuRRo",
              },
            ],
            description:
              "We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.",
            overview:
              "In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.",
          },
          {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          }
        ).then((res) => {
          if (res.status === 200) {
            console.log("post course success");
          }
        });
      }
    },
  });
  const addLesson = () => {
    // console.log(formik.values.title);
    const temp = courses;
    temp.push({ title: formik.values.title, videoUrl: formik.values.videoUrl });
    setCourses(courses);
    // console.log(temp);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <Typography variant="h6" gutterBottom>
            Lessons
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" color="primary" onClick={addLesson}>
            Add
          </Button>
        </Grid>
      </Grid>
      <form action="" onSubmit={formik.handleSubmit} style={{ padding: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="videoUrl"
              name="videoUrl"
              label="Video Url"
              fullWidth
              autoComplete="video url"
              onChange={formik.handleChange}
              value={formik.values.videoUrl}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}></Grid>
        <div>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            // onClick={handleNextClick}
            className={classes.button}
            type="submit"
          >
            {isLastStep ? "Post Course" : "Next"}
          </Button>
        </div>
      </form>
      {/* <LessonsTree /> */}
    </React.Fragment>
  );
}
