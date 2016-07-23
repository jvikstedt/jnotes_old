import React, { Component } from 'react';

export default class NotesList extends Component {
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
    return (
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
    );
  }
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired
}
