import React, { Component } from 'react';
// import '../App.css';
import NavbarInstance from './NavbarInstance';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import Category from './Category'

const {
  Grid,
  Row,
  Col
} = ReactBootstrap;

// panel, grid, tab, Accordions, Form, Media

class App extends Component {
  render() {
    console.log('Props App', this.props)

    return (
      <div className="App">
        <div><NavbarInstance></NavbarInstance></div>
        <div>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque 
                laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum 
                fugiat. Temporibus, voluptatibus.
              </Col>
              <Col xs={6} md={4}>
                <Category></Category>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect()(App);
