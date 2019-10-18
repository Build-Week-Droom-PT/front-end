import React, { useState } from "react";
import * as Yup from "yup";
// import axios from "axios";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setLoginData({ ...loginData });
    console.log(loginData);
  };

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
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
  );
};
export default LogIn;
