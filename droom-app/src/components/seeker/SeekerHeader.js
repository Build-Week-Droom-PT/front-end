import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "./Hooks/http";

// import LogOut from "../Forms/LogOut";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const SeekerHeader = props => {
  console.log(props);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  // const user = Number(props.match.params.id);
  // console.log(user);
  const { isLoadng, data, error, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/1`;

    sendRequest(proxy + url, "SEND");
  }, [sendRequest]);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          {/* {`Welcome ${data.name || ""}`} */}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to={`/seekers/1`}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to={`/matches`}>Your Matches</Link>
            </NavItem>
            <NavItem>
              <Link to={`/search-jobs`}>Find a Job</Link>
            </NavItem>
            <NavItem>
              <Link to={`/profile-update`}>Update Your Profile</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SeekerHeader;
