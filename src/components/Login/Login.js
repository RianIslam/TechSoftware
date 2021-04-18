import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import FooterInfo from "../Shared/Footer/FooterInfo";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        console.log(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col-md-8 col-sm-12 col-lg-8 p-5 m-5 rounded">
        <div className="card h-100 shadow">
        <h1 className="text-center display-3">Continue With Google</h1>
        <div className="text-center card-body">
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
        </div>
      </div>
    </div>
    <FooterInfo/>
    </div>
  );
};

export default Login;
