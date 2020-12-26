import { FormControlLabel, Radio } from "@material-ui/core";
import React from "react";

export default function RatingRadioItem({
  value,
  label,
  handleClick,
}: {
  value: string;
  label: string;
  handleClick: any;
}) {
  return (
    <FormControlLabel
      value={value}
      control={<Radio onClick={handleClick} />}
      label={label}
    />
  );
}
