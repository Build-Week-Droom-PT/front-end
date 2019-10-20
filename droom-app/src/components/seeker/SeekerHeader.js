import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogOut from "../Forms/LogOut";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const SeekerHeader = ({ props, userData }) => {
  console.log(userData.user_id);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          {`Welcome ${userData.name || ""}`}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to={`/${userData.user_id}`}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to={`/${userData.user_id}/update-seeker-profile`}>
                Udate Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link to={`/${userData.user_id}/matches`}>Matches</Link>
            </NavItem>
            <NavItem>
              <Link to={`/seekers/${userData.user_id}/search`}>
                Search Jobs
              </Link>
            </NavItem>
            <NavItem>
              <a href="#" onClick={LogOut()}>
                Log Out
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SeekerHeader;
