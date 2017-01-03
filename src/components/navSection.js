import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class NavSection extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">TrueScore</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link 1</NavItem>
            <NavItem eventKey={2} href="#">Link 2</NavItem>
          </Nav>
      </Navbar>
    );
}
};

export default NavSection;
