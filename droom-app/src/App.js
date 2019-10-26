import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import "./App.css";

import LogIn from "./components/Forms/LogForms/LogIn";
import SeekerNewUser from "./components/Forms/seekerSignUp/SeekerNewUser";
import SeekerHeader from "./components/Header/SeekerHeader";
import SeekerProfileWithRouter from "./components/seeker/SeekerProfile";
import SeekerMatches from "./components/Match/SeekerMatches";
import SeekerProfileUpdate from "./components/Forms/SeekerProfileUpdate";
import MainHeader from "./components/Header/MainHeader";
import SearchJobCard from "./components/SearchJobs/SearchJobCard";

function App() {
  return (
    <div>
      <Router className="page-color">
        <MainHeader />
        <SeekerHeader />
        <Route exact path="/login" component={LogIn} />
        <PrivateRoute
          exact
          path="/seekers/:id"
          component={SeekerProfileWithRouter}
        />
        <PrivateRoute
          exact
          path="/matched/seeker/:id"
          component={SeekerMatches}
        />
        <Route path="/sign-up" component={SeekerNewUser} />
        <Route exact path="/seekers" component={SeekerProfileUpdate} />
        <Route exact path="/search" component={SearchJobCard} />
      </Router>
    </div>
  );
}

export default App;
