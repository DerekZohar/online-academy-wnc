import { makeStyles } from "@material-ui/core";
import React from "react";
import HoverRating from "../rating";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {},
  rating: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ratingNum: {
    fontSize: 54,
    fontWeight: "bold",
    color: "F5D279",
  },
});
export default function StudentFeedback() {
  const styles = useStyles();
  const valueFeedback = {
    rating: [4.6, 54, 37, 8, 1, 1],
    comments: [],
  };
  return (
    <div>
      <div className={styles.rating}>
        <p className={styles.ratingNum}>{valueFeedback.rating[0]}</p>
        <HoverRating ratingNumber={4.6} ratingOnly={true}></HoverRating>
        <p>Course Rating</p>
      </div>
      <LinearProgressWithLabel
        style={{
          width: 500,
        }}
        value={60}
      />
    </div>
  );
}
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
