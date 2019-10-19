import React, { useState } from "react";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: ""
};

const LogIn = () => {
  const [loginData, setLoginData] = useState(initialState);
  const [userID, setUserID] = useState({});
  const [userType, setUserType] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginData);

    axiosWithAuth()
      .post("/login", loginData)
      .then(res => {
        console.log(res);
        console.log(res.data.is);
        setUserType(res.data.isCompany);
        setUserID(res.data);
        if (userType) {
          setUserType("companies");
        } else {
          setUserType("seekers");
        }
        localStorage.setItem("token", res.data.payload);
      })
      .then(
        localStorage.getItem("token")
          ? // ? (window.location.href = "/homepage")
            (window.location.href = `/${userType}/${userID}`)
          : console.log("token")
      )
      .catch(err => {
        console.log(err);
      });

    setLoginData(initialState);

    // return (
    //   <PrivateRoute
    //     path="/seekers/:id"
    //     render={props => {
    //       return <SeekerProfile {...props} userId={userID} />;
    //     }}
    //   />
    // );
  };
  console.log(userType);
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
