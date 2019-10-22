// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Route } from "react-router-dom";
// import { withRouter } from "react-router";
// import SeekerHeader from "../seeker/SeekerHeader";
// import PrivateRoute from "../private/PrivateRoute";
// import SeekerMatches from "./SeekerMatches";
// import SearchJobs from "./SearchJobs/SearchJobs";

// export default function SeekerHomePage() {
//   return (
//     <div>
//       <h1>You are a seeker!</h1>
//       <Route
//         exact
//         path="/matches"
//         render={props => <SeekerMatches {...props} userInfo={props.userData} />}
//       />
//       <Route
//         exact
//         path={`/search-jobs`}
//         render={props => <SearchJobs {...props} />}
//       />
//     </div>
//   );
// }
