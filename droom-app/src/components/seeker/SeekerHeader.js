import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import useHttp from "./Hooks/http";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "./SeekerMatches";
import LogOut from "../Forms/LogOut";

const SeekerHeader = props => {
  const id = props.location.pathname;
  const { data, sendRequest } = useHttp();

  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/${id}`;
    sendRequest(proxy + url, "SEND");
  }, [sendRequest]);
  console.log(id);

  if (data) {
    console.log(data.id);
    console.log(data);
    return (
      <div className="header-container">
        <div className="nav-styling">
          <div className="nav-container">
            <h1 className="header-message">
              {data.name ? `Welcome ${data.name}` : ""}
            </h1>

            <div className="button-container">
              <button className="profile-button">
                <Link className="link" to={`/seekers/${data.id}`}>
                  Home
                </Link>
              </button>
              <button className="profile-button">
                <Link className="link" to={`/matched/seeker/${data.id}`}>
                  Matches
                </Link>
              </button>
              <LogOut />
            </div>
          </div>
        </div>
        <PrivateRoute exact path="/matched/" component={SeekerMatches} />
      </div>
    );
  } else {
    return <span></span>;
  }
};

export default withRouter(SeekerHeader);
