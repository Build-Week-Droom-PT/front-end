import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "./Hooks/http";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "./SeekerMatches";
import LogOut from "../Forms/LogOut";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

const SeekerHeader = props => {
  const id = props.location.pathname;
  console.log(props.location.pathname);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { isLoadng, data, error, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/${id}`;

    sendRequest(proxy + url, "SEND");
  }, [sendRequest, id]);
  console.log(data);

  const HeaderStyling = styled.h1`
    border: 1px solid white;
    display: flex;
  `;

  const HeaderMessageStyling = styled.h1`
    border: 1px solid white;
    font-size: 1.6em;
    color: #383c4f;
    padding-bottom: 2%;
  `;

  const NavStyling = styled.div`
    border: 1px solid red;
    display: flex;
    flex-flow: column rap;
    padding: 2em;
    height: 20vh;
    width: 100%;
  `;

  const ButtonContainer = styled.h1`
    display: flex;
    justify-content: space-evenly;
  `;
  const HeaderContainer = styled.h1`
    // display: flex;
    // justify-content: space-evenly;
  `;

  if (data) {
    return (
      <HeaderStyling>
        <NavStyling>
          <HeaderContainer>
            <HeaderMessageStyling>
              {data ? `Welcome ${data.name}` : null}
            </HeaderMessageStyling>
            <ButtonContainer>
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
              <button className="profile-button">
                <Link className="link" to={`/listings`}>
                  Jobs
                </Link>
              </button>
              <button className="profile-button">
                <Link className="link" to={<LogOut />}>
                  Log Out
                </Link>
              </button>
            </ButtonContainer>
          </HeaderContainer>
        </NavStyling>
        <PrivateRoute exact path="/matched/" component={SeekerMatches} />
      </HeaderStyling>
    );
  } else {
    return <span>No Header</span>;
  }
};

export default SeekerHeader;
