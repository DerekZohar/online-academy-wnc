import { IconButton } from "@material-ui/core";
import { GitHub, MailOutline } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../../pages/login/loginSlice";
import { signInWithGithub, signInWithGoogle } from "../../../services/firebase";

export default function SocialMedia() {
  const history = useHistory();

  const dispatch = useDispatch();
  const signInWithGG = async () => {
    const value = await signInWithGoogle();
    value.isSuccess && history.push("/");
    dispatch(userLogin(value.user));
  };
  const signInWithGH = () => {
    const value = signInWithGithub();
    // value.isSuccess && history.push("/");
  };
  return (
    <div className="social-media">
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={signInWithGG}
        style={{
          border: "1px solid black",
        }}
      >
        <MailOutline />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={signInWithGH}
        style={{
          border: "1px solid black",
        }}
      >
        <GitHub />
      </IconButton>
    </div>
  );
}
