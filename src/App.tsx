import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import LoginPage from "./pages/login";
import firebase from "firebase";
import { firebaseConfig } from "./services/firebase";
// import WebCategoryPage from "./pages/categories/item";
import CategoryDetails from "./pages/categories";
import HomePage from "./pages/home";
import Navbar from "./components/home-details/navbar";
import PageNotFound from "./pages/page-not-found";
import CourseDetail from "./components/course-details";
import ScrollToTop from "./components/scroll-to-top";
import { checkObjEmpty } from "./helpers/checkObjEmpty";
import { userLogin } from "./pages/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import LearnCourse from "./pages/learn-course";
import WatchList from "./pages/watch-list";
import Profile from "./pages/profile";
import SearchPage from "./pages/search";
import Axios from "axios";
import SignoutPage from "./pages/signout";

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const history = useHistory();
  const userInfo = localStorage.getItem("userInfo")
    ? localStorage.getItem("userInfo")
    : "";
  // const user = useSelector((state: any) => state.user.value);

  // useEffect(() => {
  //   async function fetchData() {
  //     await Axios.get("http://localhost:3000/api/watchlist", {
  //       headers: {
  //         Authorization: "Bearer " + user.token,
  //       },
  //     }).then((res: any) => {
  //       if (res.status === 200) {
  //         userInfo?.watchList =
  //       }
  //     });
  //   }
  //   fetchData();
  // }, []);
  const dispatch = useDispatch();

  console.log(checkObjEmpty(userInfo));
  if (checkObjEmpty(userInfo) === false) {
    dispatch(userLogin(JSON.parse(userInfo || "{}")));
    // history.push("/");
  }
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-out">
          <SignoutPage />
        </Route>
        <Route path={`/course/:courseId`}>
          <CourseDetail />
        </Route>
        {/* <Route path={`/category/:categoryName`}>
          <CategoryDetails />
        </Route> */}
        <Route path={"/search/:searchName"} component={SearchPage} />

        <Route path={"/user/learning"} component={LearnCourse} />
        <Route path={"/user/watchlist"} component={WatchList} />
        <Route path={"/user/profile"} component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
