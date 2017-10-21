import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as actions from '../actions'
import { timestampToDate } from '../utils/Utils.js';
import CommentsEdit from './CommentsEdit'
import CommentsNew from './CommentsNew'
import '../App.css';
import _ from 'lodash';

const {
    Media,
    Glyphicon,
    Panel,
    Form,
    FormGroup,
    Row,
    Col,
    FormControl,
    Button,
    Label,
    ControlLabel
} = ReactBootstrap

const title = (
    <h1>Leave a Comment</h1>
);

class Comments extends Component {
    componentDidMount() {
        const { id } = this.props
        this.props.fetchCommentsByPostId(id)
    }

    onVoteComment(commentId, option) {
        this.props.voteComment(commentId, option)
      }

    onDeleteComment(commentId) {
        this.props.deleteComment(commentId)
    }

    render() {
        const { comments, id } = this.props

        if (!comments) {
            return (
                <div>
                    <h3>No comments found</h3>
                </div>
            )
        }

        return (
            <div>
                <Panel header={title}>
                    <CommentsNew postId={id}/>
                    {/* <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={2}>
                                Author
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Enter author name here ..." />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={2}>
                                Comment
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Enter comment here ..." />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form> */}
                </Panel>
                {/* <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                        <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div> */}
                <div>
                    {
                    Object.keys(comments[id]).map((key) => {
                        if (!comments[id][key].deleted) {
                            return (
                                <Media key={key}>
                                    <hr/>
                                    <Media.Left>
                                        <img width={64} height={64} src="http://placehold.it/50x50" alt="Image"/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>
                                            {`Posted by ${comments[id][key].author} on `}
                                            <Glyphicon glyph="glyphicon glyphicon glyphicon-time" />
                                            {` ${timestampToDate(comments[id][key].timestamp)}`}
                                        </Media.Heading>
                                        <Row>
                                            <Col md={6}>
                                                {comments[id][key].body}
                                                {/* <p>{comments[id][key].body}</p>
                                                
                                                <p>
                                                    {`Score `}
                                                    <Button bsSize="xsmall" onClick={() => this.onVoteComment(comments[id][key].id,'upVote')} ><Glyphicon  glyph="glyphicon glyphicon-plus-sign" /></Button>
                                                    <Label
                                                    className="text-xs-right"
                                                    bsSize="small"
                                                    bsStyle={comments[id][key].voteScore < 0 ? "danger": "default"}>
                                                        {comments[id][key].voteScore}
                                                    </Label>
                                                    <Button bsSize="xsmall" onClick={() => this.onVoteComment(comments[id][key].id,'downVote')} ><Glyphicon  glyph="glyphicon glyphicon-minus-sign" /></Button>
                                                </p> */}
                                            </Col>
                                            <Col md={4}>
                                                {`Score `}
                                                <Button bsSize="xsmall" onClick={() => this.onVoteComment(comments[id][key].id,'upVote')} ><Glyphicon  glyph="glyphicon glyphicon-plus-sign" /></Button>
                                                    <Label
                                                    className="text-xs-right"
                                                    bsSize="small"
                                                    bsStyle={comments[id][key].voteScore < 0 ? "danger": "default"}>
                                                        {comments[id][key].voteScore}
                                                    </Label>
                                                <Button bsSize="xsmall" onClick={() => this.onVoteComment(comments[id][key].id,'downVote')}><Glyphicon  glyph="glyphicon glyphicon-minus-sign" /></Button>
                                            </Col>
                                            <Col md={2}>
                                                {/* <Button bsSize="xsmall" ><Glyphicon  glyph="glyphicon glyphicon-edit" /></Button> */}
                                                <Button bsSize="xsmall">
                                                    <Link style={{"marginLeft":"5px"}}
                                                        to={`/comments/edit/${id}/${key}`}>
                                                        <Glyphicon glyph="glyphicon glyphicon-edit"/>
                                                    </Link>
                                                </Button>
                                                <Button bsSize="xsmall" onClick={() => this.onDeleteComment(comments[id][key].id)} bsStyle="danger"><Glyphicon  glyph="glyphicon glyphicon-remove" /></Button>
                                            </Col>
                                        </Row>
                                        {/* <Row>
                                            <Panel collapsible expanded={this.state.open}>
                                                <CommentsEdit postId={id} commentId={key}/>
                                            </Panel>
                                        </Row> */}
                                    </Media.Body>
                                </Media>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({comments, id}) {
    return {
      comments
    }
}

export default connect(mapStateToProps, actions)(Comments);