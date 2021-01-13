import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { useFormik } from "formik";
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
  const { activeStep, isLastStep, handleBack, handleNext } = props;
  const formik = useFormik({
    initialValues: {
      imgUrl: "",
    },
    onSubmit: (value: any) => {
      console.log(value);
      handleNext();
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
              id="imgUrl"
              name="imgUrl"
              label="Image course"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.imgUrl}
            />
          </Grid>
        </Grid>
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
    </React.Fragment>
  );
}
