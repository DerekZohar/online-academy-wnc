import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import HoverRating from "../course-details/rating";
import "./styles.css";

export default function FilterCourse({ changeCourse }: { changeCourse: any }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let rating = (event.target as HTMLInputElement).value;
    setValue(rating);
    changeCourse(rating);
    console.log(rating);
  };

  const values = ["4.5", "4.0", "3.5", "3.0"];
  return (
    <FormControl component="fieldset">
      <FormLabel>Ratings</FormLabel>
      <RadioGroup
        aria-label="rating"
        name="rating"
        value={value}
        onChange={handleChange}
      >
        {values.map((item) => (
          <FormControlLabel
            value={item}
            control={<Radio />}
            label={<p>{item + " & up"}</p>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
