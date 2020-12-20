import React, { useEffect, useState } from "react";
import Login from "../../components/login-container/login";
import SignOut from "../../components/login-container/signout";
import "./styles.css";
import registerSVG from "../../assets/register.svg";
import logSVG from "../../assets/log.svg";

export default function LoginPage() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Login />
          <SignOut />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>You haven't account?</h3>
            <p>Let's sign up below.</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                const container = document.querySelector(".container");
                container !== null && container.classList.add("sign-up-mode");
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
                console.log(123);
                const container = document.querySelector(".container");
                container !== null &&
                  container.classList.remove("sign-up-mode");
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
