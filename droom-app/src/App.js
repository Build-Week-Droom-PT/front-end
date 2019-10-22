import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
import SeekerProfileUpdateWithRouter from "./components/seeker/SeekerProfileUpdate";

import LogIn from "./components/Forms/LogIn";
import SeekerProfileWithRouter from "./components/seeker/SeekerProfile";
import CompanyProfileWithRouter from "./components/company/CompanyProfile";

import HomePage from "./components/private/HomePage";
import SeekerHomePage from "./components/seeker/SeekerHomePage";
import CompanyHomePage from "./components/company/CompanyHomePage";
import SeekerHeader from "./components/seeker/SeekerHeader";
import SeekerMatches from "./components/seeker/SeekerMatches";
import SearchJobs from "./components/seeker/SearchJobs/SearchJobs";
import SeekerCreateProfile from "./components/seeker/seekerSignUp/SeekerCreateProfile";
import SeekerProfileUpdate from "./components/seeker/SeekerProfileUpdate";
import SeekerNewUser from "./components/seeker/seekerSignUp/SeekerNewUser";
import Test from "./components/seeker/test";

import PrivateRoute from "./components/private/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/" component={HomePage} />
        {/* <PrivateRoute exact path="/seekerhomepage" component={SeekerHomePage} /> */}
        <PrivateRoute
          exact
          path="/companyhomepage"
          component={CompanyHomePage}
        />
        <PrivateRoute path="/" component={SeekerHeader} />
        <PrivateRoute
          exact
          path="/seekers/:id"
          component={SeekerProfileWithRouter}
        />
        <PrivateRoute
          exact
          path="/companies/:id"
          component={CompanyProfileWithRouter}
        />{" "}
        <PrivateRoute exact path="/matches" component={SeekerMatches} />
        {/* <PrivateRoute path="/" component={SeekerNewUser} /> */}
        <PrivateRoute
          exact
          path="/create-profile"
          component={SeekerCreateProfile}
        />
        <PrivateRoute
          exact
          path="/profile-update/:user_id"
          component={SeekerProfileUpdate}
        />
        <PrivateRoute exact path="/search-jobs" component={SearchJobs} />
        <PrivateRoute exact path="/new-user" component={SeekerNewUser} />
      </div>
    </Router>
  );
}

export default App;
