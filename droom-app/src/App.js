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

import PrivateRoute from "./components/private/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/seekerhomepage" component={SeekerHomePage} />
        <PrivateRoute
          exact
          path="/companyhomepage"
          component={CompanyHomePage}
        />

        <PrivateRoute
          exact
          path="/seekers/:id"
          component={SeekerProfileWithRouter}
        />
        <PrivateRoute
          exact
          path="/companies/:id"
          component={CompanyProfileWithRouter}
        />
        <PrivateRoute
          path="/update-seeker-profile"
          component={SeekerProfileUpdateWithRouter}
        />
      </div>
    </Router>
  );
}

export default App;
