import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as actions from '../actions'

class CommentsEdit extends Component {
    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        if (this.props.comment) {
            let initData = {
                "body": this.props.comment.body
            };

            this.props.initialize(initData);
        }
    }

    renderField(field) {
        return (
            <FormGroup>
                <label>{field.label}</label>
                <FormControl
                    type="text"
                    {...field.input}
                />
            </FormGroup>
        );
    }

    onSubmit(values) {
        const { commentId } = this.props.match.params;

        this.props.updateComment(commentId, values, () => {
            this.props.history.goBack()
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="body" type="textarea" component={this.renderField} label="Body" placeholder="Body ..."/>
                <div>
                    <button className="btn-primary" type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Reset Changes
                    </button>
                    <Link to="/">
                        <Button bsSize="small" bsStyle="danger">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        )
    }
}

function mapStateToProps({ comments }, ownProps) {
    return { comment: comments[ownProps.match.params.postId][ownProps.match.params.commentId] }
}

export default reduxForm({
    form: 'CommentsEditForm'
})(connect(mapStateToProps, actions)(CommentsEdit));