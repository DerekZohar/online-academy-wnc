import React, { useEffect, useState } from "react";
import "./styles.css";
import MyCourse from "../../components/my-course";
import Axios from "axios";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

export default function MyLearning() {
  // const course = {
  //   id: "",
  //   imgUrl:
  //     "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?yytG3JZ7tYO72YREFLuJZFmzcVBR1tht6FhV7r20dE1cYJI0EmPQGP5Q_UJXbjnNVdrVKCFtylxND-SIeZhKp5viPP0VHThFLzlO98p1Fc1J9rpF58mDvLro--5NB3Y",
  //   title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
  //   description:
  //     "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  //   authors: "NVT",
  //   people: 137190,
  //   progress: 70,
  // };
  const [courses, setCourses] = useState([
    {
      _id: "",
      price: 0,
      rating: 0,
      discount: 0,
      name: "",
      samplePictures: [
        {
          _id: "",
          pictureUrl: "",
        },
      ],
      createdDate: "",
      lastEdited: "",
      teacher: {
        _id: "",
        email: "",
        firstName: "",
        lastName: "",
      },
      enrollmentCount: 0,
      subCategory: {
        _id: "",
        categoryName: "",
      },
      category: {
        categoryName: "",
        id: "",
      },
      purchaseId: "",
      purchaseDate: "",
    },
  ]);
  const user = useSelector((state: any) => state.user.value);
  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/purchase", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res) => {
        if (res.status === 200) {
          setCourses(res.data);
        }
      });
    }
    fetchData();
  }, []);
  return (
    <div className="Watchlist-Container">
      <h2>My learning</h2>
      <div className="Course-Container">
        {courses.map((item: any, idx: number) => {
          return <MyCourse {...item} />;
        })}
      </div>
    </div>
  );
}
