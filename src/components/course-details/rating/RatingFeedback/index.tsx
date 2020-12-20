import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  numGroup: {
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  label: {
    border: "2.5px line",
    borderRadius: 5,
    backgroundColor: "#FFE799",
    fontSize: 12,
    padding: "5px 15px 5px 15px",
  },
});

export default function HoverRating({
  ratingNumber,
}: {
  ratingNumber: number;
}) {
  const [value, setValue] = useState<number | null>(ratingNumber);
  const [hover, setHover] = useState(-1);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <p>{value}</p>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          readOnly
          disabled
        />
      </div>
    </div>
  );
}
