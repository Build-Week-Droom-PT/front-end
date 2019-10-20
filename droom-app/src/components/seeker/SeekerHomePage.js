import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import SeekerHeader from "../seeker/SeekerHeader";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "./SeekerMatches";
import SearchJobs from "./SearchJobs/SearchJobs";
// import axios from "axios";
// import PrivateRoute from "../private/PrivateRoute";
// import CompanyHomePage from "../company/CompanyHomePage";
// import SeekerHomePage from "../seeker/SeekerHomePage";

// {/* <PrivateRoute exact path="/homepage" component={HomePage} /> */}

// export default function SeekerProfile() {
//   // const [returnedListings, setReturnedListings] = useState({});
//   const [dummyData, setDummyData] = useState([
//     {
//       id: 1,
//       name: "John Everyboy",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       skills: "React.js, JavaScript, HTML, CSS, SQL ",
//       location: "Houston, TX",
//       user_id: 1
//     },
//     {
//       id: 2,
//       name: "Mike N Nike",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       skills: "React.js, JavaScript, HTML, CSS, SQL ",
//       location: "Temecula, CA",
//       user_id: 3
//     }
//   ]);
//   console.log(`hello from homepage ${dummyData[0].name}`);
//   const mappedDummyData = dummyData.map(data => {
//     // setDummyData(data);
//     console.log(data);
//   });
//   const [variable, setVariable] = useState("");

//   useEffect(() => {
//     setVariable("listings");
//     console.log(variable);
//     axios
//       .get(`https://droom-pt-bw.herokuapp.com/${variable}`)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <h1> HomePage</h1>
//       <PrivateRoute path="homepage/company" component={CompanyHomePage} />
//       <PrivateRoute path="homepage/job-seeker" component={SeekerHomePage} />
//     </div>
//   );
// }

export default function SeekerHomePage() {
  return (
    <div>
      <h1>You are a seeker!</h1>
      <Route
        exact
        path="/matches"
        render={props => <SeekerMatches {...props} userInfo={props.userData} />}
      />
      <Route
        exact
        path={`/search-jobs`}
        render={props => <SearchJobs {...props} />}
      />
    </div>
  );
}
