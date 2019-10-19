import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import SeekerHeader from "../seeker/SeekerHeader";
import SeekerProfileUpdateWithRouter from "./SeekerProfileUpdate";

// export default function HomePage() {
//   if(localStorage.getItem('token')) {
//   return (
//     <h1> HomePage</h1>
//   )
//   }
//   else {window.location.href="/"}
// }

function SeekerProfile(props) {
  console.log(props);
  // const [returnedListings, setReturnedListings] = useState({});
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      name: "John Everyboy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: "React.js, JavaScript, HTML, CSS, SQL ",
      location: "Houston, TX",
      user_id: 1
    },
    {
      id: 2,
      name: "Mike N Nike",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: "React.js, JavaScript, HTML, CSS, SQL ",
      location: "Temecula, CA",
      user_id: 3
    }
  ]);

  const userData = dummyData.find(
    user => user.id === Number(props.match.params.id)
  );

  const [variable, setVariable] = useState("");

  useEffect(() => {
    setVariable("seekers/1");
    console.log(variable);
    axios
      .get(
        `https://droom-pt-bw.herokuapp.com/${variable}
      `
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [variable]);
  return (
    <div>
      <SeekerHeader path="/" data={userData} />
      <h1>{userData.name}</h1>
    </div>
  );
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
