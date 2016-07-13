'use strict';

const FETCH_NOTES = 'fetch_notes';
const INITIAL_STATE = { all: [] };

export function fetchNotes() {
  return function(dispatch) {
    dispatch({
      type: FETCH_NOTES,
      payload: [{id: 1, title: 'Ruby'}, {id: 2, title: 'Javascript'}]
    });
  }
}

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type) {
  case FETCH_NOTES:
    return { ...state, all: action.payload }
  default:
    return state;
  }
}
