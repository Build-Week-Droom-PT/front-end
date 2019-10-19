import React from "react";
import PrivateRoute from "../private/PrivateRoute";
import CompanyHomePage from "../company/CompanyHomePage";
import SeekerHomePage from "../seeker/SeekerHomePage";

// export default function HomePage() {
//   if(localStorage.getItem('token')) {
//   return (
//     <h1> HomePage</h1>
//   )
//   }
//   else {window.location.href="/"}
// }

export default function HomePage() {
  return (
    <div>
      <h1> HomePage</h1>
      <PrivateRoute path="homepage/company" component={CompanyHomePage} />
      <PrivateRoute path="homepage/job-seeker" component={SeekerHomePage} />
    </div>
  );
}
