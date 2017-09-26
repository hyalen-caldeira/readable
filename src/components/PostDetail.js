import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import NavbarInstance from './NavbarInstance';
import * as ReactBootstrap from 'react-bootstrap';
import _ from 'lodash';

const {
    Grid,
    Row,
    Col,
    Panel,
    Label
  } = ReactBootstrap;

  function timestampToDate(timestamp) {
    const time = new Date(timestamp)
    return time.toLocaleString();
  }

class PostDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPostDetail(id);
        this.props.fetchCommentsByPostId(id);
    }

    render() {
        const { post, comments } = this.props;
        return (
            <div>
                <div><NavbarInstance></NavbarInstance></div>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <div className="well">
                                {/* Title */}
                                <h1 className="mt-4">{post.title}</h1>
                                
                                {/* Author */}
                                <p className="lead">
                                    by <a href="#">{post.author}</a>
                                </p>
                                {/* <hr/> */}

                                {/* Date/Time */}
                                <Row>
                                    <Col lg={6}>
                                        <p>Posted on  {timestampToDate(post.timestamp)}</p>
                                    </Col>
                                    <Col lg={4} className="text-xs-right">
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
                                    <Col lg={2} className="text-xs-right">
                                    <h7>
                                        {`Score `}
                                        <Label
                                            className="text-xs-right"
                                            bsSize="small"
                                            bsStyle={post.voteScore < 0 ? "danger": "default"}>
                                                {post.voteScore}
                                        </Label>
                                    </h7>
                                    </Col>
                                </Row>

                                {/* Preview Image */}
                                <img className="img-fluid rounded" src="http://placehold.it/1200x300" alt=""/>
                                <hr/>

                                {/* Post Content */}
                                <p className="lead">
                                    {post.body}
                                </p>
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