import React, { useState } from "react";
// import SeekerSignUp from "../seeker/seekerSignUp/SeekerSignUp";
// import PrivateRoute from "../private/PrivateRoute";
// import SeekerCreateProfile from "../seeker/seekerSignUp/SeekerCreateProfile";

import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialState = {
  username: "",
  password: ""
}

const LogIn = () => {
  const [loginData, setLoginData] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginData);

    axiosWithAuth()
      .post("/login", loginData)
      .then( res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/homepage')
      })
      .catch(err => {
        console.log(err)
      })
    
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
        <button className="button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
export default LogIn;
