import { IconButton } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import React from "react";
import styles from "./CourseContent.module.css";

export default function CourseContent() {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}>
        <input className={styles.checkbox} type="checkbox" id="chck1" />
        <label className={styles.tab_label} htmlFor="chck1">
          Course Overview
        </label>
        <div className={styles.tab_content}>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
        </div>
      </div>
      <div className={styles.tab}>
        <input className={styles.checkbox} type="checkbox" id="chck2" />
        <label className={styles.tab_label} htmlFor="chck2">
          C++ Setup
        </label>
        <div className={styles.tab_content}>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
          <div className={styles.tab_content_item}>
            <div className={styles.course_title}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PlayCircleOutline />
              </IconButton>

              <p>Course introduction</p>
            </div>
            <p className={styles.time_play}>00:44</p>
          </div>
        </div>
      </div>
    </div>
  );
}
