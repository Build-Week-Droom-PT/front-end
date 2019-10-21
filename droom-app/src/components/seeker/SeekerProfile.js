import React, { useCallback, useEffect } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import PrivateRoute from "../private/PrivateRoute";
import styled from "styled-components";
import SeekerHeader from "../seeker/SeekerHeader";
import SeekerMatches from "./SeekerMatches";
import SearchJobs from "./SearchJobs/SearchJobs";
import SeekerCreateProfile from "./seekerSignUp/seekerCreateProfile";
import SeekerProfileUpdate from "./SeekerProfileUpdate";
import SeekerNewUser from "./seekerSignUp/SeekerNewUser";
import useHttp from "./Hooks/http";
import axios from "axios";
// import LogOut from "../Forms/LogOut";

function SeekerProfile() {
  // const user = Number(props.match.params.id);
  const { isLoadng, data, error, sendRequest } = useHttp();
  // const api = ``;
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/1`;

    //  this.getCharacters(proxy + url)
    sendRequest(proxy + url, "SEND");
    console.log(isLoadng, data, error, sendRequest);
  }, [sendRequest]);

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

  // let userData = {};
  if (data) {
    const { id, name, description, skills, location } = data;
    console.log(data.name);
    // userData = data.name;
    return (
      <div>
        {/* <SeekerHeader /> */}
        <h1>I'm Your Profile</h1>
        <CardStyling key={Date.now()}>
          <h3>{name}</h3>
          <h3>About Me</h3>
          <h4>{description}</h4>
          <h3>Skills</h3>
          <h4>${skills}</h4>
          <h3>Current Location</h3>
          <h4>{location}</h4>
        </CardStyling>
        <PrivateRoute path="/" component={SeekerMatches} />
      </div>
    );
  } else {
    return <span>No Profile</span>;
  }
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;

{
  /* <Route path="/" render={() => <SeekerNewUser />} />
    <Route path="/" render={() => <SeekerCreateProfile />} />
    <Route path="/" render={() => <SeekerProfileUpdate />} />
    <Route path="/" render={() => <SeekerMatches />} />
    <Route path={`/`} render={() => <SearchJobs />} /> */
}
{
  /* <a href="#" onClick={LogOut()}> */
}
{
  /* Log Out
    </a> */
}
