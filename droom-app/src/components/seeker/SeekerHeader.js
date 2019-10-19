import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  console.log(userData.name);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          {`Welcome, ${userData.name}`}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/homepage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/update-seeker-profile">Udate Profile</NavLink>
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
