import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import styles from "./rating.module.css";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    alignItems: "center",
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

//[ratingOnly] === false, default value
export default function HoverRating({
  ratingNumber,
  ratingOnly,
}: {
  ratingNumber: number;
  ratingOnly: boolean;
}) {
  const [value, setValue] = useState<number | null>(ratingNumber);
  const [hover, setHover] = useState(-1);

  const classes = useStyles();

  ratingOnly = ratingNumber !== undefined ? ratingOnly : false;

  if (!ratingOnly) {
    return (
      <div>
        <div className={styles.root}>
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

          {value !== null && (
            <Box className={classes.label}>
              {labels[hover !== -1 ? hover : Math.ceil(value)]}
            </Box>
          )}
        </div>
        {/* <div className={classes.numGroup}>
          <p>{formatNumber(studentRateNum) + " ratings"}</p>
          <p>{formatNumber(studentNum) + " students"}</p>
        </div> */}
      </div>
    );
  } else {
    return (
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
    );
  }
}
