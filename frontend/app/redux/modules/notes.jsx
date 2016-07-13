'use strict';

import axios from 'axios';
import config from 'config';

const FETCH_NOTES = 'fetch_notes';
const INITIAL_STATE = { all: [] };


export function fetchNotes() {
  return function(dispatch) {
    axios.get(`${config.API_URL}/notes`)
      .then(response => {
        dispatch({
          type: FETCH_NOTES,
          payload: response.data.results
        });
      }).catch(() => {
      })
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
