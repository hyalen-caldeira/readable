import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import * as actions from '../actions'
import { timestampToDate } from '../utils/Utils.js';
import '../App.css';

const {
    Media,
    Glyphicon,
    Panel,
    Form,
    FormGroup,
    Col,
    FormControl,
    Button
} = ReactBootstrap

const title = (
    <h1>Leave a Comment</h1>
);

class Comments extends Component {
    componentDidMount() {
        const { id } = this.props
        this.props.fetchCommentsByPostId(id)
    }

    render() {
        const { comments, id } = this.props

        return (
            <div>
                <Panel header={title}>
                    <Form horizontal>
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
                    </Form>
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
                {
                Object.keys(comments[id]).map((key) => (
                    <Media key={key}>
                        <Media.Left>
                            <img width={64} height={64} src="http://placehold.it/50x50" alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>
                                {`Posted by ${comments[id][key].author} on `}
                                <Glyphicon glyph="glyphicon glyphicon glyphicon-time" />
                                {` ${timestampToDate(comments[id][key].timestamp)}`}
                            </Media.Heading>
                            <p>{comments[id][key].body}</p>
                        </Media.Body>
                    </Media>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({comments}) {
    return {
      comments
    }
}

export default connect(mapStateToProps, actions)(Comments);