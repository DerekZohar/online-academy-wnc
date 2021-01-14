import { Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import "./styles.css";
import LinearWithValueLabel from "./progress-bar";

export default function MyCourse(props: any) {
  const history = useHistory();

  const { _id, name, samplePictures, teacher } = props;
  const handleClick = () => {
    history.push("/user/learning/" + _id);
  };
  return (
    <div className="course" onClick={handleClick}>
      <img
        className="image-course"
        src={
          samplePictures[0].pictureUrl
            ? samplePictures[0].pictureUrl
            : "https://designshack.net/wp-content/uploads/placeholder-image.png"
        }
        alt={name}
      />
      <div className="info">
        <p className="course-title">{name}</p>
        {/* <p className="description">{description}</p> */}
        <div className="row-icon-group">
          <div className="row">
            <Face />
            <p className="authors">
              {teacher.firstName + " " + teacher.lastName}
            </p>
          </div>
          {/* <div className="row">
            <People />
            <p>{formatNumber(people)}</p>
          </div> */}
        </div>

        <LinearWithValueLabel value={0} />
      </div>
    </div>
  );
}
