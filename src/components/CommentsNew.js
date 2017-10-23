import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {
    FormGroup,
    FormControl
} from 'react-bootstrap';

class CommentsNew extends Component {

  onSubmit(values) {
    const { postId } = this.props;
    this.props.newComment(values, postId);
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

  render() {
    const { handleSubmit, submitting, pristine, reset } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field name="author" type="text" component={this.renderField} label="Owner"/>
        <Field name="content" type="textarea" component={this.renderField} label="Content" />
        <div>
          <button className="btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
          <button className="btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'CommentsNewForm',  // a unique identifier for this form
})(connect(null, actions)(CommentsNew))
