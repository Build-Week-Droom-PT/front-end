import React, { useState } from "react";
import SeekerSignUp from "../seeker/seekerSignUp/SeekerSignUp";
import PrivateRoute from "../private/PrivateRoute";
import SeekerCreateProfile from "../seeker/seekerSignUp/SeekerCreateProfile";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setLoginData({ ...loginData });
    console.log(loginData);
    return (
      <PrivateRoute
        path="/seeker-sign-up"
        render={props => {
          return <SeekerSignUp />;
        }}
      />
    );
  };

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LogIn;
