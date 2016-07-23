import React, { Component } from 'react';

export default class Search extends Component {
  onSearchChange(e) {
    this.props.triggerSearch(e.target.value);
  }

  render() {
    return (
      <input type='text' onChange={this.onSearchChange.bind(this)}/>
    );
  }
}

Search.propTypes = {
  triggerSearch: React.PropTypes.func.isRequired
}
