import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/Forms/LogIn";
import SeekerProfileWithRouter from "./components/seeker/SeekerProfile";
import CompanyProfileWithRouter from "./components/company/CompanyProfile";
import CompanyHomePage from "./components/company/CompanyHomePage";
import SeekerHeader from "./components/seeker/SeekerHeader";
import SeekerMatches from "./components/seeker/SeekerMatches";
import SeekerProfileUpdate from "./components/seeker/SeekerProfileUpdate";
import SeekerNewUser from "./components/seeker/seekerSignUp/SeekerNewUser";
import PrivateRoute from "./components/private/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div>
      <Router className="page-color">
        <SeekerHeader />
        <Route exact path="/" component={LogIn} />
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
        />{" "}
        <PrivateRoute
          exact
          path="/matched/seeker/:id"
          component={SeekerMatches}
        />
        <PrivateRoute path="/sign-up" component={SeekerNewUser} />
        <PrivateRoute
          exact
          path="/profile-update/:user_id"
          component={SeekerProfileUpdate}
        />
      </Router>
    </div>
  );
}

export default App;
