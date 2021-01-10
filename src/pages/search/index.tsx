import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import React from "react";
import { useParams } from "react-router-dom";
import Course from "../../components/course";
import FilterCourse from "../../components/filter-course";

import "./styles.css";

export default function SearchPage() {
  let { categoryName }: { categoryName: string } = useParams();
  console.log(categoryName);
  // const rates = [4.5, 4, 3.5, 3];
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

  const [courses, setCourses] = React.useState([1, 2, 3, 4, 5]);
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
