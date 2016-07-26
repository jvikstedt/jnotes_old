'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signin } from 'redux/modules/auth';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signin(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <label htmlFor="email">Email</label>
        <input id="email" {...email} />
        {email.touched && email.error && email.error}


        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...password} />
        {password.touched && password.error && password.error}


        <button action="submit" className="btn btn-default">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}


function mapDispatchToProps(dispatch) {
  return {
    signin: (email, password) => {
      dispatch(signin(email, password));
    }
  };
}

function validate(formProps, props) {
  const errors = {}
  if (!formProps.email) {
    errors.email = 'This must be filled'
  }

  if (!formProps.password) {
    errors.password = 'This must be filled'
  }

  return errors;
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, mapDispatchToProps)(Signin)
