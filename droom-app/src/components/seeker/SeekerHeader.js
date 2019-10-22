import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "./Hooks/http";

import LogOut from "../Forms/LogOut";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const SeekerHeader = props => {
  // console.log(props);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  // const user = Number(props.match.params.id);
  // console.log(user);
  const { isLoadng, data, error, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers/1`;

    sendRequest(proxy + url, "SEND");
    console.log(isLoadng, data, error, sendRequest);
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
              <Link to={`/matches`}>Matches</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SeekerHeader;
