import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchNotes, createNote } from '../redux/modules/notes';

class Notes extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  onSearchChange(event) {
    this.props.fetchNotes(event.target.value);
  }

  handleFormSubmit({ title }) {
    this.props.createNote({ title });
  }

  renderNotes() {
    const { notes } = this.props;
    return notes.map((note) => {
      return (
        <tr key={note.id}>
          <td>{note.id}</td>
          <td>{note.title}</td>
        </tr>
      );
    });
  }

  render() {
    const { handleSubmit, fields: { title } } = this.props;
    return (
      <div>
        <input type='text' onChange={this.onSearchChange.bind(this)}/>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>TITLE</td>
            </tr>
          </thead>
          <tbody>
            {this.renderNotes()}
          </tbody>
        </table>
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
}, mapStateToProps, { fetchNotes: fetchNotes, createNote: createNote })(Notes)
