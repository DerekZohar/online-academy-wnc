import React, { useState } from "react";
import Login from "../../components/login-container/login";
import SignOut from "../../components/login-container/signout";
import "./styles.css";
import registerSVG from "../../assets/register.svg";
import logSVG from "../../assets/log.svg";
import {
  Backdrop,
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkObjEmpty } from "../../helpers/checkObjEmpty";
import { userLogin } from "./loginSlice";
// import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",

      // filter: "blur(8px)",
    },
  })
);

export default function LoginPage({ login }: { login: any }) {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(login);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem("userInfo")
    ? localStorage.getItem("userInfo")
    : "";
  console.log(checkObjEmpty(userInfo));
  if (checkObjEmpty(userInfo) === false) {
    dispatch(userLogin(JSON.parse(userInfo || "{}")));
    history.push("/");
  }
  if (!isLogin) {
    return (
      <div className="container sign-up-mode">
        <div className="forms-container">
          <div className="signin-signup">
            <Login handleToggle={handleToggle} handleClose={handleClose} />
            <SignOut handleToggle={handleToggle} handleClose={handleClose} />
          </div>
        </div>
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress />
        </Backdrop>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>You haven't account?</h3>
              <p>Let's sign up below.</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  window.history.replaceState(
                    null,
                    "New Page Title",
                    "/sign-out"
                  );
                  setIsLogin(false);
                }}
              >
                Sign up
              </button>
            </div>
            <img src={logSVG} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>You want to learn best courses?</h3>
              <p>Let's sign in to enjoy service.</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Sign in
              </button>
            </div>
            <img src={registerSVG} className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Login handleToggle={handleToggle} handleClose={handleClose} />
          <SignOut handleToggle={handleToggle} handleClose={handleClose} />
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress />
      </Backdrop>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>You haven't account?</h3>
            <p>Let's sign up below.</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign up
            </button>
          </div>
          <img src={logSVG} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>You want to learn best courses?</h3>
            <p>Let's sign in to enjoy service.</p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Sign in
            </button>
          </div>
          <img src={registerSVG} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
