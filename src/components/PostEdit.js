import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
    FormGroup,
    FormControl,
    Button,
    ControlLabel
} from 'react-bootstrap';
import * as actions from '../actions';

class PostEdit extends Component {
  componentDidMount(){
    const { postId } = this.props.match.params;
    this.props.fetchPostDetail(postId);
    this.handleInitialize();
  }

  handleInitialize() {
    if (this.props.post) {
      const initData = {
        "title": this.props.post.title,
        "body": this.props.post.body
      };
      this.props.initialize(initData);
    }
}

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = touched && error ? "warning": null;

    return (
        <FormGroup validationState={className}>
            <label>{field.label}</label>
            <FormControl
                type="text"
                {...field.input}
            />
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </FormGroup>
    );
}

onSubmit(values) {
    const { postId } = this.props.match.params;
    this.props.updatePost(postId, values, () => {
        this.props.history.push(`/`);
    });
}


render () {
  const { handleSubmit, pristine, reset, submitting, categories, post } = this.props
  return (
    <ul className='list-group col-sm-9'>
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" type="text" component={this.renderField} label="Title"/>
        <FormGroup>
          <ControlLabel>Author</ControlLabel>
          <FormControl.Static>{post ? post.author : ''}</FormControl.Static>
        </FormGroup>
        <Field name="body" type="textarea" component={this.renderField} label="Body" />
        <div>
          <button className="btn-primary" type="submit" disabled={submitting}>Submit</button>
          <Link to="/"><Button bsSize="small" bsStyle="danger" >Cancel</Button></Link>
        </div>
      </form>
    </ul>
  )
}
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.postId]}
}

export default reduxForm({
    //validate,
    form: 'EditPostForm'
})(
    connect(mapStateToProps, actions)(PostEdit)
);
