import { makeStyles } from "@material-ui/core";
import React from "react";
import HoverRating from "../rating";
import Reviews from "./reviews";
import LinearProgressWithLabel from "./linear-progress";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ratingNum: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#BE5A0E",
  },
});
export default function StudentFeedback() {
  const styles = useStyles();
  const valueFeedback = {
    rating: {
      value: 4.6,
      ratios: [1, 1, 8, 37, 54],
    },
    comments: [],
  };
  return (
    <div>
      {/* <p className="title">Student Feedback</p> */}
      <div className={styles.root}>
        <div className={styles.rating}>
          <p className={styles.ratingNum}>{valueFeedback.rating.value}</p>
          <HoverRating ratingNumber={4.6} ratingOnly={true}></HoverRating>
          <p>Course Rating</p>
        </div>
        <div className={styles.rating}>
          {valueFeedback.rating.ratios.map((item: any, index: number) => {
            return (
              <div key={index} className={styles.root}>
                <LinearProgressWithLabel value={item} />
                <HoverRating
                  ratingNumber={index + 1}
                  ratingOnly={true}
                ></HoverRating>
              </div>
            );
          })}
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
}
