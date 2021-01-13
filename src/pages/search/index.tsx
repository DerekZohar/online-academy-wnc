import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Course from "../../components/course";
import FilterCourse from "../../components/filter-course";

import "./styles.css";
import { useSelector } from "react-redux";
import Axios from "axios";

export default function SearchPage() {
  let { searchName }: { searchName: string } = useParams();
  // console.log(searchName);
  const user = useSelector((state: any) => state.user.value);
  const [courses, setCourses] = React.useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    async function fetchData() {
      await Axios.get(
        "http://localhost:3000/api/course?keyword=" + searchName,
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      ).then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          setCourses(res.data);
        }
      });
    }
    fetchData();
  }, [searchName, user.token]);
  // const rates = [4.5, 4, 3.5, 3];
  const course = {
    _id: "5ff693bd9c016639ac03c93c",
    price: 0,
    rating: 0,
    discount: 0,
    name: "Advanced HTML course",
    teacherId: "5ff5733e628d5a0da0ace07b",
    samplePictures: [],
    createdDate: "2021-01-07T04:53:17.899Z",
    lastEdited: "2021-01-07T04:53:17.899Z",
    __v: 3,
    teacher: {
      _id: "5ff5733e628d5a0da0ace07b",
      email: "tranthuanthanh@gmail.com",
      firstName: "Tran",
      lastName: "Thanh",
      __v: 0,
    },
    subCategory: {
      _id: "5fecc976a705d61b5cf603cd",
      categoryName: "HTML",
    },
    category: {
      categoryName: "Web",
      id: "5fecc59582979f0bc81cc81f",
    },
  };

  const changeCourse = (rating: number) => {
    //change course follow rating value
    console.log("change course" + rating);
  };

  const [sortOpt, setSortOpt] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setSortOpt(event.target.value as string);
    console.log(event.target.value);
  };
  return (
    <div className="category">
      <p>All Development courses</p>
      <div className="course-div">
        <div className="course-left">
          <FilterCourse changeCourse={changeCourse} />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
            <Select
              native
              value={sortOpt}
              onChange={handleChange}
              label="Age"
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"rateup"}>Rate up</option>
              <option value={"ratedown"}>Rate down</option>
              <option value={"priceup"}>Price up</option>
              <option value={"pricedown"}>Price down</option>
            </Select>
          </FormControl>
        </div>
        <div className="course-right">
          {courses.map((item, idx) => {
            return <Course key={idx} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
}
