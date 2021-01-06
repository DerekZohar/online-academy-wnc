import React from "react";
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

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const history = useHistory();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage login={true} />
        </Route>
        <Route path="/sign-out">
          <LoginPage login={false} />
        </Route>
        <Route path={`/category/web/:webId`}>
          <CourseDetail />
        </Route>
        <Route path={`/category/:categoryName`}>
          <CategoryDetails />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
