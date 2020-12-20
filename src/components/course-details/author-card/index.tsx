import React from "react";
import styles from "./authorCard.module.css";

export default function AuthorCard() {
  return (
    <div className={styles.our_team}>
      <div className={styles.picture}>
        <img
          className={styles.img_fluid}
          src="https://picsum.photos/130/130?image=1027"
          alt=""
        />
      </div>
      <div className={styles.team_content}>
        <h3 className="name">Michele Miller</h3>
        <h4 className="title">Instructor</h4>
      </div>
      <div className={styles.social}>
        <div className={styles.banner_bottom}></div>
      </div>
    </div>
  );
}
