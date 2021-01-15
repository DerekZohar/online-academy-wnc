import { Home } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { initValue } from "../../pages/login/loginSlice";
import { logOut } from "../../services/firebase";
import "./styles.css";

export default function AdminNavbar() {
  const [state, setstate] = useState("Home");
  const history = useHistory();
  const homeClick = () => {
    setstate("Home");
    history.push("/admin/categories-management");
  };
  const newClick = () => {
    setstate("News");
    history.push("/admin/course-management");
  };
  const contactClick = () => {
    setstate("Contact");
    history.push("/admin/users-management");
  };
  const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    if (!user.verified) await logOut();
    dispatch(initValue(1));
    localStorage.removeItem("userInfo");
    //update state of redux
    history.push("/login");
  };
  return (
    <div className="topnav">
      <a className={state === "Home" ? "active" : ""} onClick={homeClick}>
        Categories
      </a>
      <a className={state === "News" ? "active" : ""} onClick={newClick}>
        Courses
      </a>
      <a className={state === "Contact" ? "active" : ""} onClick={contactClick}>
        Users
      </a>

      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
