import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from 'redux/modules/notes';
import Search from 'components/search';

export default class NotesSearch extends Component {
  componentWillMount() {
    this.props.triggerSearch();
  }

  render() {
    return (
      <Search {...this.props}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    triggerSearch: (searchValue) => {
      dispatch(fetchNotes(searchValue));
    }
  };
}

export default connect(null, mapDispatchToProps)(NotesSearch);
