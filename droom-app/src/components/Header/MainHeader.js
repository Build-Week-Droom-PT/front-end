import React from "react";
import { Link, withRouter, Route } from "react-router-dom";
import LogInButton from "../Forms/LogForms/LogInButton";
// import LogInButton from "../Forms/LogForms/LogInButton";

const MainHeader = props => {
  const onClickHandler = e => {
    return console.log("e.target.value");
  };
  return (
    <div>
      <div className="main-header">
        <div className="header-spacing">
          <h1 className="droom">Droom</h1>

          <div className="nav-styling">
            <div className="nav-container"></div>
          </div>
        </div>
      </div>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="button-container">
              <Link className="link" to="/login">
                Login or Sign Up
              </Link>
            </div>
          );
        }}
      />
    </div>
  );
};

export default withRouter(MainHeader);
