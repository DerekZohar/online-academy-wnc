import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import LoginPage from "./pages/login";
import firebase from "firebase";
import { firebaseConfig } from "./services/firebase";
import WebCategoryPage from "./pages/categories/item";
import CategoryDetails from "./pages/categories";
import HomePage from "./pages/home";
import Navbar from "./components/home-details/navbar";
import PageNotFound from "./pages/page-not-found";

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <Router>
      <Navbar isLogin={true} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path={`/web/:webId`}>
          <WebCategoryPage />
        </Route>
        <Route path={`/categories`}>
          <CategoryDetails />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
