import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Navigation extends React.Component {

  render() {
    return (

      
      <div className="navigation">
        <Navbar id="nav"color="faded" light >
          <Nav className="float-right">
            <NavbarBrand href="/">Truescore</NavbarBrand>
            <NavItem>
              <NavLink href="#/home">Home</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink href="#/stats">Stats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
