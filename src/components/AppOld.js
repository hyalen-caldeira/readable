import React, { Component } from 'react';
// import '../App.css';
import NavbarInstance from './NavbarInstance';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import Category from './Category'
import { fetchCategories } from '../actions'
import * as ReadableAPI from '../utils/ReadableAPI'
import axios from 'axios';

const {
  Grid,
  Row,
  Col
} = ReactBootstrap;

// panel, grid, tab, Accordions, Form, Media

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

const AUTH_HEADERS = { 'Authorization': token, 'Accept': 'application/json', };
axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

class App extends Component {
  
  componentDidMount() {
    fetch(`http://localhost:3001/categories`, {headers})
        .then(res => res.json())
        .then(data => {
          console.log('Primeiro >>>>>> ...', data.categories)
        })

    // this.props.getAllCategories()

    const request = axios.get(`http://localhost:3001/categories`)

    request.then(({ data }) => {
      console.log('Segundo >>>>>> ...', data.categories)
    })

    console.log('Terceiro >>>>>> ...', ReadableAPI.fetchCategories())

    ReadableAPI.fetchCategories().then(({data}) => {
      console.log('Hhahahhahahahahahahahahh', data.categories)
      return data.categories
  }) 
    
    this.props.getAllCategories()
    // .then(data => console.log('Hyalen Moreira Caldeira -->', data))
  }

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

function mapStateToProps ({category}) {
  return {
    category: [{name:category.name, path:category.path}]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);