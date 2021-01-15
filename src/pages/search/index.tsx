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
  console.log(searchName);
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
          console.log(res.data);
          setCourses(res.data);
        }
      });
    }
    fetchData();
  }, [searchName, user.token]);

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
          {/* <FilterCourse changeCourse={changeCourse} /> */}
          {/* <FormControl variant="outlined">
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
          </FormControl> */}
        </div>
        <div className="course-right">
          {courses.map((item, idx) => {
            return <Course key={idx} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
