import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import useHttp from "../../Hooks/http";
import MainHeader from "./MainHeader";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "../Match/SeekerMatches";
import LogOut from "../Forms/LogForms/LogOut";

const SeekerHeader = props => {
  const id = props.location.pathname;
  const { data, sendRequest } = useHttp();

  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/${id}`;
    sendRequest(proxy + url, "SEND");
  }, [sendRequest]);

  if (data) {
    return (
      <div>
        <div className="nav-container">
          <div className="nav-styling">
            {data.name && (
              <div className="button-container">
                <Link className="link" to={`/seekers/${data.id}`}>
                  Home
                </Link>
                <Link className="link" to={`/matched/seeker/${data.id}`}>
                  Matches
                </Link>
                <Link className="link" to={`/search`}>
                  Find A Job
                </Link>
                <Link className="link" to={`/seekers`}>
                  Update Your Profile
                </Link>
                <LogOut />
              </div>
            )}
          </div>
        </div>
        <Route exact path="/matched/" component={SeekerMatches} />
        <h1 className="header-message">
          {data.name ? `Welcome ${data.name}` : ""}
        </h1>
      </div>
    );
  } else {
    return null;
  }
};

export default withRouter(SeekerHeader);
