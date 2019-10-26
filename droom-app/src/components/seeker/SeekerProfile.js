import React, { useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import useHttp from "../../Hooks/http";

import SearchJobCard from "../SearchJobs/SearchJobCard";

function SeekerProfile(props) {
  const user = Number(props.match.params.id);
  const { data, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/${user}`;

    sendRequest(proxy + url, "SEND");
  }, [sendRequest]);

  const CardStyling = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    align-self: flex-start;
    max-width: 70vw;
    min-height: 50vh;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
    color: #383c4f;
    font-size: 1.6rem;
  `;
  const CardCentering = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  `;

  if (data) {
    const { id, name, description, skills, location } = data;
    return (
      <div>
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
        </CardCentering>
      </div>
    );
  } else {
    return <span>No Profile</span>;
  }
}

const SeekerProfileWithRouter = withRouter(SeekerProfile);

export default SeekerProfileWithRouter;
