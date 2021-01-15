import React, { useEffect, useState } from "react";
import "./styles.css";
import MyCourse from "../../components/my-course";
import Axios from "axios";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

export default function MyLearning() {
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
