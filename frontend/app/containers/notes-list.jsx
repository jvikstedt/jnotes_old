import { connect } from 'react-redux';
import NotesList from 'components/notes/notes-list';

function mapStateToProps(state) {
  return {
    notes: state.notes.all
  };
}

export default connect(mapStateToProps, null)(NotesList);
