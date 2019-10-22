import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { jobs } from "../data";
import useHttp from "../Hooks/http";
import styled from "styled-components";

function SearchJobCard() {
  const { isLoadng, data, error, sendRequest } = useHttp();
  // const jobs = data;
  // const api = ``;
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/listings`;

    sendRequest(proxy + url, "SEND");
    console.log(isLoadng, data, error, sendRequest);
  }, [sendRequest]);
  // const CardStyling = styled.div`
  //   width: 75%;
  //   display: flex;
  //   flex-flow: column nowrap;
  //   border: 1px solid #e1e6f9;
  //   margin: 3% auto;
  //   justify-content: space-between;
  //   width: 50vw;
  //   max-height: 50vh;
  //   max-width: 1024px;
  //   margin: 35px auto;
  //   background: #f1f3fd;
  //   padding: 15px;
  //   box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
  //     0 15px 12px rgba(44, 58, 127, 0.22);
  //   color: #383c4f;
  //   font-size: 1.6rem;
  // `;

  // const LinkStyling = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  //   margin: 3%;
  //   color: #2c3a74;
  // `;

  // const FontColor = styled.div`
  //   color: #2c3a74;
  //   font-size: 2.6rem;
  // `;
  function likeClickHandler(e) {
    e.preventDefault();
    // const userId = props.user_id /*psuedocode */
    // const listingId = props.listing_id /*psuedocode */
    // const [userData, setSetUserData] = useState({});
    // useEffect(() => {
    //   axios
    //     .get(
    //       `https://droom-pt-bw.herokuapp.com/match/seeker/${userId}/match/job/${listingId}
    //         `
    //     )
    //     .then(res => {
    //       // console.log(res);
    //       setSetUserData(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }, [userData]);
    console.log(`You liked this job!`);
  }

  function passClickHandler(e) {
    e.preventDefault();
    //delete job card here
    console.log(`No thanks for this job!`);
  }
  console.log(data);
  return (
    <div>
      <p>JOB CARD</p>
      {/* {jobs.map(job => (
        <CardStyling key={Date.now()}>
          <h3>{job.company}</h3>
          <h4>{job.jobtitle}</h4>
          <h4>${job.salary}</h4>
          <h4>{job.location}</h4>
          <h4>{job.description}</h4>
          <LinkStyling>
            <button onClick={likeClickHandler}>
              <FontColor>
                <i class="far fa-thumbs-up"></i>
              </FontColor>
            </button>
            <button onClick={passClickHandler}>
              <FontColor>
                <i class="far fa-thumbs-down"></i>
              </FontColor>
            </button>
          </LinkStyling>
        </CardStyling>
      ))} */}
    </div>
  );
}
export default SearchJobCard;
