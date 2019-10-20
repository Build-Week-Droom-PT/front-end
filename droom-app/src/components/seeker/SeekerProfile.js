import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import SeekerHeader from "../seeker/SeekerHeader";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "./SeekerMatches";
import SearchJobs from "./SearchJobs/SearchJobs";
// import LogOut from "../Forms/LogOut";

function SeekerProfile(props) {
  console.log(props);

  const user = Number(props.match.params.id);

  const [userData, setSetUserData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://droom-pt-bw.herokuapp.com/seekers/${user}
          `
      )
      .then(res => {
        // console.log(res);
        setSetUserData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user]);
  const [jobList, setJobList] = useState({});
  console.log(props.userInfo);
  useEffect(() => {
    axios
      .get(
        `https://droom-pt-bw.herokuapp.com/listings
            `
      )
      .then(res => {
        console.log(res);
        setSetUserData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userData]);

  return (
    <div>
      <SeekerHeader {...props} userData={userData} />
      <Route
        path="/"
        render={props => <SeekerMatches {...props} userInfo={props.userData} />}
      />
      <Route path={`/`} render={props => <SearchJobs {...props} />} />

      {/* <a href="#" onClick={LogOut()}> */}
      {/* Log Out
      </a> */}
    </div>
  );
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
