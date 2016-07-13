import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../redux/modules/notes';

class Notes extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  onSearchChange(event) {
    this.props.fetchNotes(event.target.value);
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { notes: state.notes.all };
}

export default connect(mapStateToProps, { fetchNotes: fetchNotes })(Notes)
