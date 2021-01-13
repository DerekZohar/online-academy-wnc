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
  const { activeStep, isLastStep, handleBack, handleNext } = props;
  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    onSubmit: async (value: any) => {
      // console.log(value);
      // handleNext();
      if (isLastStep) {
        await Axios.post(
          "http://localhost:3000/api/course/",
          {},
          {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          }
        );
      }
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Image Course
      </Typography>
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
            {isLastStep ? "Place order" : "Next"}
          </Button>
        </div>
      </form>
      <LessonsTree />
    </React.Fragment>
  );
}
