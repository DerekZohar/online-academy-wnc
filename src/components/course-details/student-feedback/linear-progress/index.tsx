import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";

import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import { Box, Typography } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      width: 500,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: "white",
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#4481ed",
    },
  })
)(LinearProgress);

export default function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
