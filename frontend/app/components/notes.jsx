import React, { Component } from 'react';
import NotesSearch from 'containers/notes-search';
import NotesList from 'containers/notes-list';
import Form from 'containers/form';

export default class Notes extends Component {
  render() {
    return (
      <div>
        <NotesSearch/>
        <NotesList/>
        <Form/>
      </div>
    );
  }
}
