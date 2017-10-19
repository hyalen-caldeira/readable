import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import * as actions from '../actions'

class CommentsEdit extends Component {
    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        if (this.props.comment) {
            console.log('Comment Initialize -> ', this.props.comment)

            const initData = {
                "body": this.props.comment.body
            };

            console.log('initData -> ', initData)
            this.props.initialize(initData);
        }
    }

    // renderField(field) {
    //     const { meta: { touched, error } } = field;
    //     const className = touched && error ? "warning": null;

    //     return (
    //         <FormGroup>
    //             <label>{field.label}</label>
    //             <FormControl
    //                 type="text"
    //                 {...field.input}
    //             />
    //         </FormGroup>
    //     );
    // }

    renderField(field) {
        console.log('field ->', field)
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
        
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            //<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <form onSubmit={handleSubmit}>
                <Field name="body" type="textarea" component={this.renderField} label="Body" placeholder="Body ..."/>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

function mapStateToProps({ comments }, ownProps) {
    return { comment: comments[ownProps.postId][ownProps.commentId] }
}

export default reduxForm({
    form: 'CommentsEditForm'
})(connect(mapStateToProps, actions)(CommentsEdit));