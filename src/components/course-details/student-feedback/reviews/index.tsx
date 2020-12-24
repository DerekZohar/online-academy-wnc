import { Avatar } from "@material-ui/core";
import React from "react";
import HoverRating from "../../rating";
import "./styles.css";

export default function index() {
  const reviews = [
    {
      name: "Debora Durek",
      comment: "Debora Durek",
      rate: 5,
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    },
    {
      name: "Debora Durek",
      comment: "Debora Durek",
      rate: 5,
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    },
    {
      name: "Debora Durek",
      comment:
        "Debora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora DurekDebora Durek",
      rate: 4.6,
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    },
  ];
  return (
    <div className="reivews">
      {reviews.map((item, index) => {
        return (
          <div className="root">
            <Avatar
              alt="Remy Sharp"
              src={item.avatar}
              style={{ height: 60, width: 60 }}
            />
            <div className="infomation">
              <p className="name">{item.name}</p>
              <HoverRating ratingNumber={item.rate} ratingOnly={true} />
              <p>{item.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
