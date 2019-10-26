import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import jobsData from "../../data";

function SearchJobCard() {
  const [jobs, setJobs] = useState(jobsData);

  function likeClickHandler(userID) {
    const newArray = jobs.filter(job => {
      return job.id !== userID;
    });
    setJobs(newArray);
  }

  function passClickHandler(userID) {
    const newArray = jobs.filter(job => {
      return job.id !== userID;
    });
    setJobs(newArray);
  }

  const CardStyling = styled.div`
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    max-width: 100%
    width: 70vw;
    padding: 15px;
    color: #383c4f;
    font-size: 1.6rem;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
  `;

  const LinkStyling = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3%;
    color: #2c3a74;
  `;

  const Shadow = styled.div`
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
  `;
  const FontColor = styled.div`
    color: #2c3a74;
    font-size: 2.6rem;
  `;

  if (jobs) {
    return (
      <div>
        {jobs.map(job => (
          <div key={job.id}>
            <CardStyling key={Date.now()}>
              <h3>{job.company}</h3>
              <h4>{job.jobtitle}</h4>
              <h4>${job.salary}</h4>
              <h4>{job.location}</h4>
              <h4>{job.description}</h4>
              <LinkStyling>
                <Shadow>
                  <button onClick={() => likeClickHandler(job.id)}>
                    <FontColor>
                      <i className="far fa-thumbs-up"></i>
                    </FontColor>
                  </button>
                </Shadow>
                <Shadow>
                  <button onClick={() => passClickHandler(job.id)}>
                    <FontColor>
                      <i className="far fa-thumbs-down"></i>
                    </FontColor>
                  </button>
                </Shadow>
              </LinkStyling>
            </CardStyling>
          </div>
        ))}
      </div>
    );
  } else {
    return <span>No Matches</span>;
  }
}
const SearchJobCardWithRouter = withRouter(SearchJobCard);
export default SearchJobCardWithRouter;
