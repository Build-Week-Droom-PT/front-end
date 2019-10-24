import React, { useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import useHttp from "./Hooks/http";
import SeekerMatches from "./SeekerMatches";
import PrivateRoute from "../private/PrivateRoute";
import SeekerHomePage from "../seeker/SeekerHomePage";
import SeekerHeader from "../seeker/SeekerHomePage";

function SeekerProfile(props) {
  const user = Number(props.match.params.id);
  console.log(user);
  const { isLoadng, data, error, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/${user}`;

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

  const onClickHandler = e => {
    e.preventDefault();
  };

  if (data) {
    const { id, name, description, skills, location } = data;
    return (
      <div>
        {/* <PrivateRoute path="/seekers/:id/" component={SeekerHeader} /> */}
        <CardCentering className="seeker-profile">
          <CardStyling key={id}>
            <h3>{name}</h3>
            <h3>About Me</h3>
            <h4>{description}</h4>
            <h3>Skills</h3>
            <h4>${skills}</h4>
            <h3>Current Location</h3>
            <h4>{location}</h4>
          </CardStyling>
          {/* <PrivateRoute
          exact
          path="/matched/seeker/:id"
          component={SeekerMatches}
        /> */}
        </CardCentering>
      </div>
    );
  } else {
    return <span>No Profile</span>;
  }
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
