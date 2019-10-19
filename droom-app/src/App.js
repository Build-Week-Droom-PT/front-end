import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
import SeekerProfileUpdateWithRouter from "./components/seeker/SeekerProfileUpdate";

import LogIn from "./components/Forms/LogIn";
import SeekerProfileWithRouter from "./components/seeker/SeekerProfile";
import CompanyProfileWithRouter from "./components/company/CompanyProfile";
import HomePage from "./components/private/HomePage";
import PrivateRoute from "./components/private/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LogIn} />
        <PrivateRoute exact path="/homepage" component={HomePage} />
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
        <Route
          path="/update-seeker-profile"
          component={SeekerProfileUpdateWithRouter}
        />
      </div>
    </Router>
  );
}

export default App;
