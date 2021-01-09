import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Course from "../../components/course";
import "./styles.css";
export default function WatchList() {
  const course = {
    imgUrl:
      "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?yytG3JZ7tYO72YREFLuJZFmzcVBR1tht6FhV7r20dE1cYJI0EmPQGP5Q_UJXbjnNVdrVKCFtylxND-SIeZhKp5viPP0VHThFLzlO98p1Fc1J9rpF58mDvLro--5NB3Y",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    authors: "NVT",
    people: 137190,
    rating: 4.6,
    price: 120,
    discount: 0.8,
  };
  const user = useSelector((state: any) => state.user.value);
  const watchList = React.useState(user.watchList);
  const [page, setPage] = React.useState(1);

  if (!user.token)
    return (
      <div style={{ marginTop: "80px" }}>
        YOU MUST LOGIN TO PERFORM THIS ACTION
      </div>
    );

  const handleChangePage = (e: any, value: number) => {
    console.log(value);
    setPage(value);
  };

  //đã có page, thêm api watch list
  //thay đổi data nếu page thay đổi và dữ liệu tồn tại
  return (
    <div className="watch-list">
      <Course {...course} />
      <Pagination
        style={{ justifyContent: "center" }}
        count={10}
        color="primary"
        onChange={handleChangePage}
      />
    </div>
  );
}
