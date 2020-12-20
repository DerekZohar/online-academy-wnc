import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./styles.css";
import SocialMedia from "../social-media";

import firebase from "firebase";
import { AccountCircle, GitHub, Lock, MailOutline } from "@material-ui/icons";
import {
  logOut,
  signInWithGithub,
  signInWithGoogle,
} from "../../../services/firebase";
import { Button, IconButton } from "@material-ui/core";

function Login() {
  // const dispatch = useDispatch();
  //   const history = useHistory();

  //   const handleLogin = (payload) => {
  //     dispatch(login(payload));
  //   };

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    logOut();
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        if (!user) {
          console.log("not user");
        } else console.log("login: " + user.displayName);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await axios
        .post(`${process.env.REACT_APP_API_LOGIN}`, {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          // if (res.data.authenticated === true) {
          //   const token = {
          //     accessToken: res.data.accessToken,
          //     refreshToken: res.data.refreshToken,
          //   };
          //   localStorage.setItem("sakilaToken", JSON.stringify(token));
          //   handleLogin({ token });
          //   history.push("/actors");
          // } else {
          //   alert("Login failed.");
          // }
          console.log("login success");
        })
        .catch((error) => console.log(error));
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
      <Button color="primary">Forgot password?</Button>
      <input type="submit" defaultValue="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <SocialMedia></SocialMedia>
    </form>
  );
}

export default Login;
