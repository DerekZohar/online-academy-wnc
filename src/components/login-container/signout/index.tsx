import { useFormik } from "formik";
import React from "react";
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

export default function SignOut() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const userDataToPost = {
        username: values.username,
        password: values.password,
      };
      console.log(process.env.REACT_APP_API_LOGIN);
      await axios
        .post(`${process.env.REACT_APP_API_LOGIN}`, userDataToPost)
        .then((res) => {
          const container = document.querySelector(".container");
          container !== null && container.classList.remove("sign-up-mode");
          //TO-DO
          //redirect login page
        })
        .catch((error) => console.log(error));
    },
  });
  return (
    <form action="#" className="sign-up-form" onSubmit={formik.handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <AccountCircle />
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div className="input-field">
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
      </div>
      <input type="submit" className="btn" defaultValue="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <SocialMedia></SocialMedia>
    </form>
  );
}
