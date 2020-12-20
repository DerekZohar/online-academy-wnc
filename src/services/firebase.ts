import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyC8mgrS1kLXY2B3QdjyWpyCD2XvWj_uaWo",
  authDomain: "online-academy-b5845.firebaseapp.com",
  projectId: "online-academy-b5845",
  storageBucket: "online-academy-b5845.appspot.com",
  messagingSenderId: "593133410251",
  appId: "1:593133410251:web:a7e97359ae6c9ca5c7c84e",
  measurementId: "G-5CGZ58ZXEJ",
};

export const signInWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log("signInWithGoogle success");
    })
    .catch(function (error) {
      console.log("signInWithGoogle fail");
    });
};

export const signInWithGithub = () => {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log("signInWithGithub success");
    })
    .catch(function (error) {
      console.log(error.message)
      console.log("signInWithGithub fail");
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        console.log("logout");
      },
      function (error) {
        console.log("logout error: "+ error);
      }
    );
};
