import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Theme,
} from "@material-ui/core";
import Axios from "axios";
// import { ca } from "date-fns/locale";

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
      name: "",
      overview: "",
      price: 0,
      discount: 0,
      categoryId: "",
      subCategoryId: "",
    },
    onSubmit: (value: any) => {
      // console.log(value);
      setValues({ ...values, ...value });
      // console.log({ ...values, ...value });
      handleNext();
      // console.log({ ...values, ...value });
    },
  });

  const [categories, setCategories] = React.useState([
    { id: "", categoryName: "", subCategories: [] },
  ]);
  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://14.225.27.135/api/category").then((res) => {
        if (res.status === 200) {
          setCategories(res.data);
        }
      });
    }
    fetchData();
  }, []);
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
  const getSubCategories = () => {
    const list = categories.filter((value: any) =>
      value.id === formik.values.categoryId ? value : null
    );
    if (list.length === 0) return <div></div>;

    return list[0].subCategories.map((item: any, idx: number) => {
      return <option value={item.id}>{item.categoryName}</option>;
    });
  };
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
              id="name"
              name="name"
              label="Title course"
              fullWidth
              autoComplete="given-name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="overview"
              name="overview"
              label="Overview"
              fullWidth
              autoComplete="overview of course"
              onChange={formik.handleChange}
              value={formik.values.overview}
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
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Category *</InputLabel>
              <Select
                native
                required
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                inputProps={{
                  name: "categoryId",
                  id: "category-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {/* <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option> */}
                {categories.map((item: any, idx: number) => {
                  return (
                    <option key={idx} value={item.id}>
                      {item.categoryName}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">
                Sub Category *
              </InputLabel>
              <Select
                native
                required
                value={formik.values.subCategoryId}
                onChange={formik.handleChange}
                inputProps={{
                  name: "subCategoryId",
                  id: "subCategory-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {getSubCategories()}
              </Select>
            </FormControl>
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
