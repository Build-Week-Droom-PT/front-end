import React, { useEffect } from "react";
import styled from "styled-components";
import useHttp from "../../Hooks/http";

function SeekerMatches(props) {
  const pathID = props.location.pathname;
  const CardStyling = styled.div`
    border-radius: 12px;
    width: 75%;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    align-self: flex-start;
    width: 30vw;
    min-height: 300px;
    min-width: 300px;
    // margin: 0, 60%, 0, 0;
    background: #f1f3fd;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
    color: #383c4f;
    font-size: 1.6rem;
  `;

  const { data, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com${pathID}`;

    sendRequest(proxy + url, "SEND");
  }, [sendRequest]);

  if (data) {
    return (
      <div className="seeker-profile">
        <div className="match-styling">
          {data.map(job => (
            <div key={job.user_id}>
              <CardStyling key={Date.now()}>
                <h1> It's a Match!</h1>
                <h3>{job.company}</h3>
                <h4>{job.jobtitle}</h4>
                <h4>${job.salary}</h4>
                <h4>{job.location}</h4>
                <h4>{job.description}</h4>
              </CardStyling>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <span>No Matches</span>;
  }
}

export default SeekerMatches;
