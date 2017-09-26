import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} = ReactBootstrap;
  
class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              Readable
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>Home</NavItem>
            <NavItem eventKey={2} href="#">Add Post</NavItem>
            <NavDropdown eventKey={3} title="Sort By" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Date</MenuItem>
              <MenuItem eventKey={3.2}>Vote Score</MenuItem>
              <MenuItem eventKey={3.3} disabled={true}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} disabled={true}>Something else here</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" disabled={true}>About</NavItem>
            <NavItem eventKey={2} href="#" disabled={true}>Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;