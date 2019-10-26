import React from "react";
import { Link, withRouter } from "react-router-dom";

const MainHeader = props => {
  return (
    <div>
      <div className="main-header">
        <h1 className="nav-styling">Droom</h1>
        <div className="button-container">
          <button className="profile-button">
            <Link className="link" to={`/`}>
              Sign In
            </Link>
          </button>
          <button className="profile-button">
            <Link className="link" to={`/`}>
              Sign UP
            </Link>
          </button>
        </div>
        <div className="nav-styling">
          <div className="nav-container"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainHeader);
