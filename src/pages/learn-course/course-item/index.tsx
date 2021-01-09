import { Checkbox } from "@material-ui/core";
import React from "react";
import "./styles.css";

export default function CourseItem({
  id,
  url,
  onClick,
}: {
  id: number;
  url: string;
  onClick: any;
}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    onClick(url);
  };
  return (
    <div className="course-item" onClick={handleClick}>
      <Checkbox
        checked={checked}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      <h4>Introduction course</h4>
    </div>
  );
}
