import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import useHttp from "../../Hooks/http";
import MainHeader from "./MainHeader";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "../Match/SeekerMatches";
import LogOut from "../Forms/LogForms/LogOut";
import { isInteger } from "formik";

const SeekerHeader = props => {
  const id = props.location.pathname;
  const { data, sendRequest } = useHttp();
  console.log(id);
  const filteredID = id.split("/").filter(el => {
    return Number(el);
  });
  console.log(typeof filteredID[0]);
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/${filteredID[0]}`;
    sendRequest(proxy + url, "SEND");
  }, [sendRequest, filteredID[0]]);

  console.log(`hello world`);
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
                <Link className="link" to={`/search/${data.id}`}>
                  Find A Job
                </Link>
                <Link className="link" to={`/update/seekers/${data.id}`}>
                  Update Your Profile
                </Link>
                <LogOut />
              </div>
            )}
          </div>
        </div>
        <PrivateRoute exact path="/matched/" component={SeekerMatches} />
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
