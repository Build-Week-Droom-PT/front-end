import React, { useState, useEffect } from "react";
// import SeekerSignUp from "../seeker/seekerSignUp/SeekerSignUp";
// import PrivateRoute from "../private/PrivateRoute";
// import SeekerCreateProfile from "../seeker/seekerSignUp/SeekerCreateProfile";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: ""
};

const LogIn = () => {
  const [loginData, setLoginData] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginData);

    axiosWithAuth()
      .post("/login", loginData)
      .then(res => {
        console.log(res);
        // isCompany is a boolean that is returned in the res, could be useful for dynamically routing
        console.log(res.data.isCompany);
        localStorage.setItem("token", res.data.payload);
      })
      .then(
        localStorage.getItem("token")
          ? (window.location.href = "/homepage")
          : console.log("token")
      )
      .catch(err => {
        console.log(err);
      });

    setLoginData(initialState);

    // return (
    //   <PrivateRoute
    //     path="/seeker-sign-up"
    //     render={props => {
    //       return <SeekerSignUp />;
    //     }}
    //   />
    // );
  };

  //   useEffect(() => {}, []);
  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={loginData.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginData.password}
        />
        <button className="button">Log In</button>
      </form>
    </div>
  );
};
export default LogIn;
