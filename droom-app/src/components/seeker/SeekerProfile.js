import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import SeekerHeader from "../seeker/SeekerHeader";
import SeekerMatches from "./SeekerMatches";
import SearchJobs from "./SearchJobs/SearchJobs";
import SeekerCreateProfile from "./seekerSignUp/SeekerCreateProfile";
import SeekerProfileUpdate from "./SeekerProfileUpdate";
import SeekerNewUser from "./seekerSignUp/SeekerNewUser";
// import LogOut from "../Forms/LogOut";

function SeekerProfile(props) {
  console.log(props);
  const CardStyling = styled.div`
    width: 75%;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    width: 50vw;
    max-height: 50vh;
    max-width: 1024px;
    margin: 35px auto;
    background: #f1f3fd;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
    color: #383c4f;
    font-size: 1.6rem;
  `;

  const LinkStyling = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3%;
    color: #2c3a74;
  `;

  const FontColor = styled.div`
    color: #2c3a74;
    font-size: 2.6rem;
  `;

  const user = Number(props.match.params.id);
  console.log(user);

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
        setJobList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [jobList]);
  console.log(userData);
  return (
    <div>
      <SeekerHeader {...props} userData={userData} />
      <h1>I'm Your Profile</h1>
      <CardStyling key={Date.now()}>
        <h3>{userData.name}</h3>
        <h4>{userData.description}</h4>
        <h4>${userData.skills}</h4>
        <h4>{userData.location}</h4>
        {/* <LinkStyling>
    <Link href="#">
      <FontColor>
        <i class="far fa-thumbs-up"></i>
      </FontColor>
    </Link>
    <Link href="#">
      <FontColor>
        <i class="far fa-thumbs-down"></i>
      </FontColor>
    </Link>
  </LinkStyling> */}
      </CardStyling>
      <Route
        path="/"
        render={props => <SeekerNewUser {...props} userInfo={props.userData} />}
      />
      <Route
        path="/"
        render={props => (
          <SeekerCreateProfile {...props} userInfo={props.userData} />
        )}
      />
      <Route
        path="/"
        render={props => (
          <SeekerProfileUpdate {...props} userInfo={props.userData} />
        )}
      />
      <Route
        path="/"
        render={props => <SeekerMatches {...props} userInfo={props.userData} />}
      />
      <Route
        path={`/`}
        render={props => <SearchJobs {...props} jobs={jobList} />}
      />
      {/* <a href="#" onClick={LogOut()}> */}
      {/* Log Out
      </a> */}
    </div>
  );
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
