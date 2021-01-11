import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./styles.css";
import SocialMedia from "../social-media";

import firebase from "firebase";
import { AccountCircle, Lock } from "@material-ui/icons";
import { logOut } from "../../../services/firebase";
import { Button, Snackbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../pages/login/loginSlice";
import Alert from "@material-ui/lab/Alert";

function Login({
  handleToggle,
  handleClose,
}: {
  handleToggle: any;
  handleClose: any;
}) {
  const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const [openSB, setOpenSB] = useState(false);
  const handleClickSB = () => {
    setOpenSB(true);
  };

  const handleCloseSB = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSB(false);
  };
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    logOut();
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        if (!user) {
          console.log("not user");
        } else {
          // console.log({ first });

          // console.log(userLogin);
          console.log("login: " + user.displayName);
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      handleToggle();
      await axios
        .post(`${process.env.REACT_APP_API_LOGIN}`, {
          email: values.username,
          password: values.password,
        })
        .then((res) => {
          handleClose();
          dispatch(userLogin(res.data));
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          history.push("/");

          // console.log("login success");
        })
        .catch((error) => {
          handleClose();
          handleClickSB();
        });
    },
  });

  return (
    <form action="#" className="sign-in-form" onSubmit={formik.handleSubmit}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <AccountCircle />
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div className="input-field">
        <Lock />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      {/* {loader} */}
      <Button color="primary">Forgot password?</Button>
      <input
        type="submit"
        defaultValue="Login"
        className="btn solid"
        // onClick={handleClickSB}
      />
      <p className="social-text">Or Sign in with social platforms</p>
      <SocialMedia></SocialMedia>
      <Snackbar open={openSB} autoHideDuration={6000} onClose={handleCloseSB}>
        <Alert onClose={handleCloseSB} severity="error">
          Login fail! Please login again!
        </Alert>
      </Snackbar>
    </form>
  );
}

export default Login;
