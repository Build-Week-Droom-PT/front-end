// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { jobs } from "../seeker/data";

// function SeekerMatches(props) {
//   const CardStyling = styled.div`
//     width: 75%;
//     display: flex;
//     flex-flow: column nowrap;
//     border: 1px solid #e1e6f9;
//     margin: 3% auto;
//     justify-content: space-between;
//     width: 50vw;
//     max-height: 50vh;
//     max-width: 1024px;
//     margin: 35px auto;
//     background: #f1f3fd;
//     padding: 15px;
//     box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
//       0 15px 12px rgba(44, 58, 127, 0.22);
//     color: #383c4f;
//     font-size: 1.6rem;
//   `;
//   //   const user = Number(props.match.params.id);

//   //   console.log(userInfo);
//   const seekerId = props.user_id; /*psuedocode */

//   const [matches, setMatches] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         `https://droom-pt-bw.herokuapp.com/matched/seeker/${seekerId}
//           `
//       )
//       .then(res => {
//         // console.log(res);
//         setMatches(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, [matches]);

//   return (
//     <div>
//       <h1> Matches </h1>
//       <div>
//         {jobs.map(job => (
//           <CardStyling key={Date.now()}>
//             <h3>{job.company}</h3>
//             <h4>{job.jobtitle}</h4>
//             <h4>${job.salary}</h4>
//             <h4>{job.location}</h4>
//             <h4>{job.description}</h4>
//           </CardStyling>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SeekerMatches;
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
// import { jobs } from "../seeker/data";
import useHttp from "./Hooks/http";
// import PrivateRoute from "../private/PrivateRoute";

function SeekerMatches(props) {
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
  //   const user = Number(props.match.params.id);

  //   console.log(userInfo);
  const { isLoadng, data, error, sendRequest } = useHttp();
  // const api = ``;
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/matched/seeker/1
    `;

    sendRequest(proxy + url, "SEND");
    console.log(isLoadng, data, error, sendRequest);
  }, [sendRequest]);
  //
  console.log(data);
  const dataChecker = data;
  if (dataChecker) {
    {
      // const dataReturned = data;
      // console.log(dataReturned);
      dataChecker.map(job => {
        console.log(job.company);
        if (job) {
          console.log(`you have a job`);
          return (
            <div>
              <CardStyling key={Date.now()}>
                <h3>{console.log(job.company)}</h3>
                <h4>{console.log(job.jobtitle)}</h4>
                <h4>${console.log(job.salary)}</h4>
                <h4>{console.log(job.location)}</h4>
                <h4>{console.log(job.description)}</h4>
              </CardStyling>
            </div>
          );
        }
      });
    }
  } else {
    return <h1> No Matches from if (data)</h1>;
  }

  return <div>what is the problem?</div>;
}

export default SeekerMatches;
