import { IconButton } from "@material-ui/core";
import { GitHub, MailOutline } from "@material-ui/icons";
import React from "react";
import { signInWithGithub, signInWithGoogle } from "../../../services/firebase";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={signInWithGoogle}
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
        onClick={signInWithGithub}
        style={{
          border: "1px solid black",
        }}
      >
        <GitHub />
      </IconButton>
    </div>
  );
}
