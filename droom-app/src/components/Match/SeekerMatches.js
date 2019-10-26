import React, { useEffect } from "react";
import styled from "styled-components";
import useHttp from "../../Hooks/http";

function SeekerMatches(props) {
  const pathID = props.location.pathname;
  const CardStyling = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    align-self: flex-start;
    max-width: 70vw;
    min-height: 30vh;
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
      <div>
        <div>
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
