import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { useFormik } from "formik";
import Axios from "axios";
import { useSelector } from "react-redux";
import LessonsTree from "../lesson-tree";
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
  const [courses, setCourses] = React.useState([{ title: "", url: "" }]);
  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    onSubmit: async (value: any) => {
      setValues({ ...values, lessons: courses });

      // if (isLastStep) {
      //   await Axios.post(
      //     "http://localhost:3000/api/course/",
      //     {},
      //     {
      //       headers: {
      //         Authorization: "Bearer " + user.token,
      //       },
      //     }
      //   ).then((res) => {
      //     if (res.status === 200) {
      //     }
      //   });
      // }
    },
  });
  const addLesson = () => {
    // console.log(formik.values.title);
    const temp = courses;
    temp.push({ title: formik.values.title, url: formik.values.url });
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
              id="url"
              name="url"
              label="Video Url"
              fullWidth
              autoComplete="video url"
              onChange={formik.handleChange}
              value={formik.values.url}
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
