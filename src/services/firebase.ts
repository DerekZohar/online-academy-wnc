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

export const signInWithGoogle = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  let check = false;
  let userInfo = {};
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const credential = result.credential as firebase.auth.OAuthCredential;
      // console.log(credential.accessToken)
      
      var user = result.user;
      // console.log(user);

      userInfo = {
        email: user?.email,
        firstName: user?.displayName,
        lastName: "",
        roleId: 1,
        token: credential.accessToken,
        avatarUrl: user?.photoURL,
      };
      console.log("signInWithGoogle success");
      check = true;
    })
    .catch(function (error) {
      console.log("signInWithGoogle fail");
    });
  return {
    isSuccess: check,
    user: {...userInfo}
  };
};

export const signInWithGithub = async () => {
  var provider = new firebase.auth.GithubAuthProvider();
  let check = false;
  let userInfo = {};
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const credential = result.credential as firebase.auth.OAuthCredential;
      // console.log(credential.accessToken)
      
      var user = result.user;
      // console.log(user);

      userInfo = {
        email: user?.email,
        firstName: user?.displayName,
        lastName: "",
        roleId: 1,
        token: credential.accessToken,
        avatarUrl: user?.photoURL,
      };
      check = true;
    })
    .catch(function (error) {
      console.log(error.message)
      console.log("signInWithGithub fail");
    });

  return {
    isSuccess: check,
    user: {...userInfo}
  };;

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
