import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: ""
};

const LogIn = () => {
  const [loginData, setLoginData] = useState(initialState);
  const [userID, setUserID] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginData, userID);

    axiosWithAuth()
      .post("/login", loginData)
      .then(res => {
        console.log(res);
        console.log(res.data.id);
        const id = res.data.id;
        setUserID(res.data);

        localStorage.setItem("token", res.data.token);

        if (res.data.isCompany) {
          window.location.href = "/companyhomepage";
        } else {
          window.location.href = `/seekers/${id}`;
          // window.location.href = "/seekerhomepage";
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
  const CardStyling = styled.div`
    width: 75%;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    align-self: flex-start;
    width: 30vw;
    min-height: 50vh;
    max-width: 1024px;
    // margin: 0, 60%, 0, 0;
    background: #f1f3fd;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
    color: #383c4f;
    font-size: 1.6rem;
  `;
  const CardCentering = styled.div`
    border: 1px solid green;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  `;

  return (
    <div>
      {/* <CardStyling> */}
      <form onSubmit={handleSubmit}>
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
        <button className="button">
          {/* <Link to="/signup">Sign Up</Link> */}
        </button>
      </form>
      <button className="button">
        <Link to="/signup">Sign Up</Link>
      </button>
      {/* </CardStyling> */}
    </div>
  );
};
export default LogIn;

// import React, { useState } from "react";
// // import SeekerSignUp from "../seeker/seekerSignUp/SeekerSignUp";
// // import PrivateRoute from "../private/PrivateRoute";
// // import SeekerCreateProfile from "../seeker/seekerSignUp/SeekerCreateProfile";

// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// const initialState = {
//   username: "",
//   password: ""
// };

// const LogIn = () => {
//   const [loginData, setLoginData] = useState(initialState);

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(loginData);

//     axiosWithAuth()
//       .post("/login", loginData)
//       .then(res => {
//         console.log(res);
//         localStorage.setItem("token", res.data.payload);
//       })
//       .then(
//         localStorage.getItem("token")
//           ? (window.location.href = "/homepage")
//           : console.log("token")
//       )
//       .catch(err => {
//         console.log(err);
//       });

//     setLoginData(initialState);

//     // return (
//     //   <PrivateRoute
//     //     path="/seeker-sign-up"
//     //     render={props => {
//     //       return <SeekerSignUp />;
//     //     }}
//     //   />
//     // );
//   };

//   const handleChange = e => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           value={loginData.username}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           value={loginData.password}
//         />
//         <button className="button">Log In</button>
//       </form>
//     </div>
//   );
// };
// export default LogIn;
