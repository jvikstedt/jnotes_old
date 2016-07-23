import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    const { handleSubmit, fields: { title } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.handleFormSubmit)}>

        <label htmlFor="title">Title</label>
        <input {...title} id="title"/>
        {title.touched && title.error && title.error}
        <button action="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired
}
