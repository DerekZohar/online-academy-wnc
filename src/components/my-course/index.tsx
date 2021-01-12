import { Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import "./styles.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import LinearWithValueLabel from "./progress-bar";

export default function MyCourse({
  imgUrl,
  title,
  description,
  authors,
  people,
  progress,
}: {
  imgUrl: string;
  title: string;
  description: string;
  authors: string;
  people: number;
  progress: number;
}) {
  const history = useHistory();
  const handleClick = () => {};
  return (
    <div className="course" onClick={handleClick}>
      <img className="image-course" src={imgUrl} alt={title} />
      <div className="info">
        <p className="course-title">{title}</p>
        <p className="description">{description}</p>
        <div className="row-icon-group">
          <div className="row">
            <Face />
            <p className="authors">{authors}</p>
          </div>
          <div className="row">
            <People />
            <p>{formatNumber(people)}</p>
          </div>
        </div>

        <LinearWithValueLabel value={progress} />
      </div>
    </div>
  );
}
