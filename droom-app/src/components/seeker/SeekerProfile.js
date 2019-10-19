import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import SeekerHeader from "../seeker/SeekerHeader";
import LogOut from "../Forms/LogOut";

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

  const user = Number(props.match.params.id);

  const [userData, setSetUserData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://droom-pt-bw.herokuapp.com/seekers/${user}
        `
      )
      .then(res => {
        console.log(res);
        setSetUserData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user]);

  console.log(userData);
  return (
    <div>
      <SeekerHeader {...props} userData={userData} path="/" />
      <a href="#" onClick={LogOut()}>
        Log Out
      </a>
    </div>
  );
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
