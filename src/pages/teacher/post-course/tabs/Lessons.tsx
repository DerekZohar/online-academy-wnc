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
            subCategoryId: values.subCategoryId,
            // lessons: [
            //   {
            //     order: 1,
            //     title: "test title",
            //     description: "test des",
            //     content: "test content",
            //     videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            //   },
            // ],
            lessons: courses,
            description: values.description,
            overview: values.overview,
          },
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmZhMWNlNDU4MDg1YjFmYTQzYWRiNDIiLCJyb2xlSWQiOjIsImlhdCI6MTYxMDYzNzEwMiwiZXhwIjoxNjExMjQxOTAyfQ.FrjD6rQ59RlzSr7mQ_O5_HK-O-QCjGah6IGGZDQMRaI",
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
