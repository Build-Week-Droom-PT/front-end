import React, { useState } from "react";
import SeekerNewUser from "../seekerSignUp/SeekerNewUser";

import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: ""
};

const LogIn = props => {
  const [loginData, setLoginData] = useState(initialState);
  const [userID, setUserID] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", loginData)
      .then(res => {
        const id = res.data.id;
        setUserID(res.data);

        localStorage.setItem("token", res.data.token);

        if (res.data.isCompany) {
          props.history.push("/companyhomepage");
        } else {
          props.history.push(`/seekers/${id}`);
        }
      })
      .catch(err => {
        console.log(err);
      });

    setLoginData(initialState);
  };
  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const signUpClickHandler = () => {
    props.history.push(`/sign-up`);
  };

  return (
    <div>
      <div className="seeker-profile">
        <div className="match-styling">
          <form className="card-styling" onSubmit={handleSubmit}>
            <h1>Log In</h1>
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
            <div className="center">
              <button className="button">Log In</button>
              <button className="button" onClick={signUpClickHandler}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
