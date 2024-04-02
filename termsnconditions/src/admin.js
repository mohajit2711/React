import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import xrcicon from "./XRCLogo.svg";
import "./admin.scss";
import { useNavigate } from "react-router-dom";
import {enqueueSnackbar } from "notistack";

export const userCheck = (userCredential) => {
    return !!userCredential;
};
export const Admin = () => {
  const navigate = useNavigate();
  // const Notification = (message) => {};
  const Authenticate = (emailId, pass) => {
    console.log(emailId, pass);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailId, pass)
      .then((userCredential) => {
        // Signed in
        userCheck(userCredential);
        if (userCredential) {
          navigate("/dashboard");
          // const user = userCredential.user;
          const smessage = "Login Successful. Welcome to XRC";
          enqueueSnackbar(smessage);
        } else {
          const message = "Invalid Credentials. Please contact host.";
          enqueueSnackbar(message);
        }
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        const emessage = "Wrong Password. Please Try Again.";
        enqueueSnackbar(emessage);
      });
  };

  return (
    <div className="container">
      <div className="Header">
        <img className="Logo" src={xrcicon} alt="XRC Logo"></img>
        <h1 className="admin-header">Admin Dashboard</h1>
      </div>
      <div className="sign-in">
        <h2>Sign In</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const emailID = e.target[0].value;
            const password = e.target[1].value;
            Authenticate(emailID, password);
          }}
        >
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="emailID" required />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
