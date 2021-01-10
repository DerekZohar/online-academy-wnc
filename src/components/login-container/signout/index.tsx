import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import registerSVG from "../../../assets/register.svg";
import SocialMedia from "../social-media";
import {
  Facebook,
  MailOutline,
  LinkedIn,
  AccountCircle,
  Lock,
  Mail,
  GitHub,
} from "@material-ui/icons";
import { signInWithGithub, signInWithGoogle } from "../../../services/firebase";
import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import OtpInput from "react-otp-input";
import OtpDialog from "./otp";
const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignOut({
  handleToggle,
  handleClose,
}: {
  handleToggle: any;
  handleClose: any;
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: 1,
      birthDate: "",
    },
    onSubmit: async (values) => {
      const userDataToPost = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        roleId: 1,
        birthDate: selectedDate?.toString(),
        password: values.password,
      };
      console.log(userDataToPost);
      await axios
        .post(`${process.env.REACT_APP_API_SIGNUP}`, userDataToPost)
        .then((res) => {
          // const container = document.querySelector(".container");
          // container !== null && container.classList.remove("sign-up-mode");
          console.log(userDataToPost);
          setOpen(true);
          //TO-DO
          //redirect login page
        })
        .catch((error) => console.log(error));
      setOpen(true);
    },
  });
  const [selectedDate, handleDateChange] = React.useState<Date | null>(
    new Date()
  );
  const [open, setOpen] = React.useState(false);
  const handleOpenOtp = () => {
    setOpen(true);
  };

  const handleCloseOtp = () => {
    setOpen(false);
  };
  //add api for otp dialog
  return (
    <form action="#" className="sign-up-form" onSubmit={formik.handleSubmit}>
      <h2 className="title">Sign up</h2>
      <OtpDialog
        email={formik.values.email}
        open={open}
        handleClickOpen={handleOpenOtp}
        handleClose={handleCloseOtp}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Teacher?"
            onChange={formik.handleChange}
            value={formik.values.roleId}
          />
        </Grid>
      </Grid>

      {/* <div className="input-field">
        <AccountCircle />
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="input-field">
        <AccountCircle />
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="input-field">
        <AccountCircle />
        <input
          id="birthday"
          name="birthday"
          type="text"
          placeholder="birthday"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
        />
      </div> */}
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider> */}

      {/* <div className="input-field">
        <Mail />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="input-field">
        <Lock />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div> */}

      <input type="submit" className="btn" defaultValue="Sign up" />
    </form>
  );
}
