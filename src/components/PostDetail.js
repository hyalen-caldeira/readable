import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import NavbarInstance from './NavbarInstance';
import { Link } from 'react-router-dom';
import Category from './Category';
import Comments from './Comments';
import * as ReactBootstrap from 'react-bootstrap';
import _ from 'lodash';
import { timestampToDate } from '../utils/Utils.js';

const {
    Grid,
    Row,
    Col,
    Panel,
    Label,
    ListGroup,
    ListGroupItem,
    Glyphicon,
    Button
  } = ReactBootstrap;

  const wellStyles = {margin: '0 auto 10px'};

class PostDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPostDetail(id);
        this.props.fetchCommentsByPostId(id);
    }

    onVotePost(postId, option) {
        this.props.votePost(postId, option)
    }

    onDeletePost(postId) {
        this.props.deletePost(postId)
        alert("Post deleted")
        this.props.history.goBack()
    }

    render() {
        const { id } = this.props.match.params
        const { post, comments } = this.props
        
        if (!post) {
            return (
                <div>
                    <h1>404 Error - No posts found for this category!</h1>
                </div>
            ) 
        } 

        return (
            <div>
                <div><NavbarInstance></NavbarInstance></div>
                <Grid>
                    <Row>
                        <Col lg={8}>
                            <ListGroup>
                                <ListGroupItem className="well" style={wellStyles}>
                                    <Row className="show-grid"> 
                                        <Col lg={12}>
                                            {/* Title */}
                                            <h1 className="mt-4">{post.title}</h1>
                                    
                                            {/* Author */}
                                            <p className="lead">
                                                by <a href="#">{post.author}</a>
                                            </p>
                                        </Col>
                                    </Row>
                                    {/* Date/Time */}
                                    <Row>
                                        <Col lg={4}>
                                            <p>
                                                {`Posted on `}
                                                <Glyphicon glyph="glyphicon glyphicon glyphicon-time" /> 
                                                {` ${timestampToDate(post.timestamp)}`}
                                            </p>
                                        </Col>
                                        <Col lg={3} className="text-xs-right">
                                            {`Comments `} 
                                            <h7>
                                                <Label
                                                className="text-xs-right"
                                                bsSize="small"
                                                bsStyle="default">
                                                {_.size(_.filter(comments[post.id], comment => !comment.deleted))}
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
                                            <Button bsSize="xsmall">
                                                <Link style={{"marginLeft":"5px"}}
                                                    to={`/posts/${post.id}`}>
                                                    <Glyphicon glyph="glyphicon glyphicon-edit"/>
                                                </Link>
                                            </Button>
                                            <Button bsSize="xsmall" onClick={() => this.onDeletePost(post.id)} bsStyle="danger"><Glyphicon  glyph="glyphicon glyphicon-remove" /></Button>
                                        </Col>
                                    </Row>

                                    {/* Preview Image */}
                                    <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                                    <hr/>

                                    {/* Post Content */}
                                    <p className="lead">
                                        {post.body}
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className="well" style={wellStyles}>
                                    <Comments id={id}/>
                                </ListGroupItem>
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
        )
    }
}

function mapStateToProps({ posts, comments }, ownProps) {
    return {
      post: posts[ownProps.match.params.id],
      comments
    }
}

export default connect(mapStateToProps, actions)(PostDetail)