import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {


  render() {
    return (
      <div>
        <Navbar color="faded" light >
          <Nav className="float-right">
            <NavbarBrand href="/">trueScore</NavbarBrand>
            <NavItem>
              <NavLink href="#/">play</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/stats">stats</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
