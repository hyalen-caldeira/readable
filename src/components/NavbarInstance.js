import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} = ReactBootstrap;

class NavbarInstance extends Component {
  onSelect(event) {
    console.log('Dentro de NavbarInstance', event)

    this.props.statePostOrder(event)
  }

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
            <NavItem eventKey={1}>
              <Link to='/'>
                <Glyphicon glyph="glyphicon glyphicon glyphicon-home" />
                {` Home`}
              </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to='/posts'>
                <Glyphicon glyph="glyphicon glyphicon glyphicon-plus" />
                {` Add Post`}
              </Link>
              </NavItem>
            <NavDropdown eventKey={3} title="Sort By" id="basic-nav-dropdown">
              <MenuItem onSelect={(event) => this.onSelect(event)} eventKey={'timestamp'}>Date</MenuItem>
              <MenuItem onSelect={(event) => this.onSelect(event)} eventKey={'voteScore'}>Vote Score</MenuItem>
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

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, actions)(NavbarInstance);