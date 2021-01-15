import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./authorCard.module.css";

export default function AuthorCard(props: any) {
  const { courseId } = props;
  const user = useSelector((state: any) => state.user.value);
  const [teacherId, setTeacherId] = useState("");
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/" + courseId, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res) => {
        if (res.status === 200) {
          setTeacherId(res.data.teacherId);
        }
      });
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/user" + teacherId, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res) => {
        if (res.status === 200) {
          setTeacherId(res.data.teacherId);
        }
      });
    }
    fetchData();
  }, []);
  // const [userInfo, setuserInfo] = useState({});
  // const user = useSelector((state: any) => state.user.value);
  return (
    <div className={styles.our_team}>
      <div className={styles.picture}>
        <img
          className={styles.img_fluid}
          src={
            user.avatarUrl
              ? user.avatarUrl
              : "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
          }
          alt="ava"
        />
      </div>
      <div className={styles.team_content}>
        <h3 className="name">{user.firstName + " " + user.lastName}</h3>
        <h4 className="title">Instructor</h4>
      </div>
      <div className={styles.social}>
        <div className={styles.banner_bottom}></div>
      </div>
    </div>
  );
}
