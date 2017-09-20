import React, { Component } from 'react';
import '../App.css';
import NavbarInstance from './NavbarInstance';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import Category from './Category'
import * as actions from '../actions'

const {
  Grid,
  Row,
  Col,
  Panel
} = ReactBootstrap;

// panel, grid, tab, Accordions, Form, Media

class App extends Component {
  
  componentDidMount() {
    this.props.fetchPosts()

    console.log('Dentro de App >>>>>>>>>', this.props)
  }

  render() {
    return (
      <div className="App">
        <div><NavbarInstance></NavbarInstance></div>
        <div>

          {/* Page Content */}
          <Grid>
            <Row>

              {/* Post Content Column */}
              <Col lg={8}>

                {/* Title */}
                <h1 className="mt-4">Post Title</h1>

                {/* Author */}
                <p className="lead">
                  by <a href="#">Start  Bootstrap</a>
                </p>
                <hr/>

                {/* Date/Time */}
                <p>Posted on January 1, 2017 at 12:00 PM</p>
                <hr/>

                {/* Preview Image */}
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                <hr/>

              </Col>
              <Col md={4}>
                <Category></Category>
                <div>
                  <Panel header='Side Widget'> 
                    Panel content ...
                  </Panel>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, actions)(App);