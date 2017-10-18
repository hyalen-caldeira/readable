import React, { Component } from 'react';
import '../App.css';
import NavbarInstance from './NavbarInstance';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import Category from './Category'
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';

// Para editar alguma coisa
// Collapsible Panel

// Inserir novo comentario

// Inserir novo post

// Filtrar comentarios excluidos

// Filtrar posts excluidos

// Retornar mensagem de "nao existe"

// Editar posts

// Editar comments

const {
  Grid,
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Button,
  Glyphicon
} = ReactBootstrap;

const wellStyles = {margin: '0 auto 10px'};
// panel, grid, tab, Accordions, Form, Media

function timestampToDate(timestamp) {
  const time = new Date(timestamp)
  return time.toLocaleString();
}

class App extends Component {
  componentDidMount() {
    if(this.props.match.params.category) {
      const { fetchPostsByCategoryId } = this.props
      const { category } = this.props.match.params
      //   // match: { params : { category } } } = this.props;

      fetchPostsByCategoryId(category);
    } else {
      this.props.fetchPosts()
    }
  }

  onVotePost(postId, option) {
    this.props.votePost(postId, option)
  }

  onDeletePost(postId) {
    this.props.deletePost(postId)
    alert("Post deleted")
  }

  render() {
    const { posts, comments, postOrder } = this.props
    const sortedPosts = _.sortBy(posts, postOrder).reverse()

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
                  // Object.keys(posts).map((key) => (
                  sortedPosts.map(post => {
                    if (!post.deleted) {
                      return (
                        <ListGroupItem className="well" key={post.id} style={wellStyles}>
                          <Row className="show-grid"> 
                            <Col lg={12}>
                              <Link to={`/${post.category}/${post.id}`}>
                                <h1 className="mt-4 post-preview">{post.title}</h1>
                              </Link>
                              <p className="lead">
                                by <a href="#" className="lead destaq">{post.author}</a>
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={4}>
                              <p>Posted on  {timestampToDate(post.timestamp)}</p>
                            </Col>
                            <Col lg={3}  className="text-xs-right">
                              {`Comments `} 
                              <h7>
                                <Label
                                  className="text-xs-right"
                                  bsSize="small"
                                  bsStyle="default">
                                    {_.size(comments[post.id])}
                                </Label>
                              </h7>
                            </Col>
                            <Col lg={3} className="text-xs-right">
                              <h7>
                                {`Score `}
                                <Button bsSize="xsmall" onClick={() => this.onVotePost(post.id,'upVote')} ><Glyphicon  glyph="glyphicon glyphicon-plus-sign" /></Button>
                                <Label
                                  className="text-xs-right"
                                  bsSize="small"
                                  bsStyle={post.voteScore < 0 ? "danger": "default"}>
                                    {post.voteScore}
                                </Label>
                                <Button bsSize="xsmall" onClick={() => this.onVotePost(post.id,'downVote')} ><Glyphicon  glyph="glyphicon glyphicon-minus-sign" /></Button>
                              </h7>
                            </Col>
                            <Col lg={2} className="text-xs-right">
                              {/* <Button bsSize="xsmall" onClick={() => this.setState({ open: !this.state.open })}><Glyphicon  glyph="glyphicon glyphicon-edit" /></Button> */}
                              <Button bsSize="xsmall" onClick={() => this.onDeletePost(post.id)} bsStyle="danger">Del <Glyphicon  glyph="glyphicon glyphicon-remove" /></Button>
                            </Col>
                          </Row>

                          {/* Preview Image */}
                          <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                          <hr/>

                          {/* Post Content */}
                          <p className="lead">
                            {post.body}
                          </p>
                          {/* <hr/> */}
                        </ListGroupItem>
                      )
                    }
                  })
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

function mapStateToProps ({posts, comments, order}) {
  return {
    // posts,
    posts: _.filter(posts, post => !post.deleted),
    comments,
    postOrder : order
  }
}

export default connect(mapStateToProps, actions)(App);