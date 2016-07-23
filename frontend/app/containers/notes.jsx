import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createNote } from 'redux/modules/notes';
import NotesSearch from 'containers/notes-search';
import NotesList from 'components/notes/notes-list';

class Notes extends Component {

  handleFormSubmit({ title }) {
    this.props.createNote({ title });
  }

  render() {
    const { handleSubmit, fields: { title }, notes } = this.props;
    return (
      <div>
        <NotesSearch/>
        <NotesList notes={notes}/>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <label htmlFor="title">Title</label>
          <input {...title} id="title"/>
          {title.touched && title.error && title.error}
          <button action="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(formProps, props) {
  const errors = {}
  if (!formProps.title) {
    errors.title = 'Title can\'t be blank';
  }

  return errors;
}

function mapStateToProps(state) {
  return { notes: state.notes.all };
}

export default reduxForm({
  form: 'createNote',
  fields: ['title'],
  validate
}, mapStateToProps, { createNote: createNote })(Notes)
