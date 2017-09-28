import React, { Component } from 'react';
import '../App.css';
import NavbarInstance from './NavbarInstance';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import Category from './Category'
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import _ from 'lodash';

// Na tela principal  
//   Exibir a categoria
// Comments
//   Usar o mesmo layout da pagina principal
//   Criar component

const {
  Grid,
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Label
} = ReactBootstrap;

const wellStyles = {margin: '0 auto 10px'};
// panel, grid, tab, Accordions, Form, Media

function timestampToDate(timestamp) {
  const time = new Date(timestamp)
  return time.toLocaleString();
}

class App extends Component {
  componentDidMount() {
    console.log('>>>>>>>>> TO AQUI, GENTEEEEEEE ...', this.props.match.params.category)
    if(this.props.match.params.category) {
      const { fetchPostsByCategoryId } = this.props
      const { category } = this.props.params.category
        // match: { params : { category } } } = this.props;

      console.log('>>>>>>>>>', category)

      fetchPostsByCategoryId(category);
    } else {
      console.log('>>>>>>>>> TO AQUI, OH ...', this.props)
      this.props.fetchPosts()
    }
  }

  render() {
    const { posts, comments } = this.props

    return (
      <div className="App">
        <div><NavbarInstance></NavbarInstance></div>
        <div>

          {/* Page Content */}
          <Grid>
            <Row>
              {/* Post Content Column */}
              <Col lg={8}>
                <ListGroup>
                {
                  Object.keys(posts).map((key, index) => (
                    
                    <ListGroupItem className="well" key={key} style={wellStyles}>
                      <Row className="show-grid"> 
                        <Col lg={12}>
                          <Link to={`/${posts[key].category}/${posts[key].id}`}>
                            <h1 className="mt-4 post-preview">{posts[key].title}</h1>
                          </Link>
                          <p className="lead">
                            by <a href="#" className="lead destaq">{posts[key].author}</a>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <p>Posted on  {timestampToDate(posts[key].timestamp)}</p>
                        </Col>
                        <Col lg={4}  className="text-xs-right">
                          {`Comments `} 
                          <h7>
                            <Label
                              className="text-xs-right"
                              bsSize="small"
                              bsStyle="default">
                                {_.size(comments[posts[key].id])}
                            </Label>
                          </h7>
                        </Col>
                        <Col lg={2} className="text-xs-right">
                          <h7>
                            {`Score `}
                            <Label
                              className="text-xs-right"
                              bsSize="small"
                              bsStyle={posts[key].voteScore < 0 ? "danger": "default"}>
                                {posts[key].voteScore}
                            </Label>
                          </h7>
                        </Col>
                      </Row>

                      {/* Preview Image */}
                      <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                      <hr/>

                      {/* Post Content */}
                      <p className="lead">
                        {posts[key].body}
                      </p>
                      {/* <hr/> */}
                    </ListGroupItem>
                  ))
                }
                </ListGroup>
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

function mapStateToProps ({posts, comments}) {
  return {
    posts,
    comments
  }
}

export default connect(mapStateToProps, actions)(App);