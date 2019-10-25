import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { jobs } from "../data";

function SearchJobCard() {
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

  const LinkStyling = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3%;
    color: #2c3a74;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
  `;

  const FontColor = styled.div`
    color: #2c3a74;
    font-size: 2.6rem;
  `;

  function likeClickHandler(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(`You liked this job!`);
  }

  function passClickHandler(e) {
    e.preventDefault();
    console.log(`No thanks for this job!`);
  }

  if (jobs) {
    return (
      <div>
        {jobs.map(job => (
          <div key={job.user_id}>
            <CardStyling key={Date.now()}>
              <h3>{job.company}</h3>
              <h4>{job.jobtitle}</h4>
              <h4>${job.salary}</h4>
              <h4>{job.location}</h4>
              <h4>{job.description}</h4>
              <LinkStyling>
                <button onClick={likeClickHandler}>
                  <FontColor>
                    <i className="far fa-thumbs-up"></i>
                  </FontColor>
                </button>
                <button onClick={passClickHandler}>
                  <FontColor>
                    <i className="far fa-thumbs-down"></i>
                  </FontColor>
                </button>
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
