import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { Button, makeStyles, Theme } from "@material-ui/core";

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
export default function InfoCourse(props: any) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
      price: 0,
      discount: 0,
      category: "",
      subCategory: "",
    },
    onSubmit: (value: any) => {
      // console.log(value);
      setValues({ ...values, ...value });
      // console.log({ ...values, ...value });
      handleNext();
    },
  });
  const {
    values,
    setValues,
    activeStep,
    isLastStep,
    handleBack,
    handleNext,
  } = props;

  // const handleNextClick = () => {
  //   handleNext();
  // };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Info course
      </Typography>
      <form action="" onSubmit={formik.handleSubmit} style={{ padding: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title course"
              fullWidth
              autoComplete="given-name"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="summary"
              name="summary"
              label="Summary"
              fullWidth
              autoComplete="summary of course"
              onChange={formik.handleChange}
              value={formik.values.summary}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="discount"
              name="discount"
              label="Discount"
              type="number"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.discount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="category"
              name="category"
              label="Category"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="subCategory"
              name="subCategory"
              label="Sub Category"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.subCategory}
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
