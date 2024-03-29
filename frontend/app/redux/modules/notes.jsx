'use strict';

import axios from 'axios';
import config from 'config';

const FETCH_NOTES = 'fetch_notes';
const CREATE_NOTE = 'create_note';
const INITIAL_STATE = { all: [], note: {} };

export function fetchNotes(search = '') {
  return function(dispatch) {
    axios.get(`${config.API_URL}/notes`, {
      params: { search },
      headers: { authorization: localStorage.getItem('token')}
    }).then(response => {
        dispatch({
          type: FETCH_NOTES,
          payload: response.data
        });
      }).catch(() => { });
  };
}

export function createNote(params) {
  return function(dispatch) {
    axios({
      method: 'post',
      url: `${config.API_URL}/notes`,
      data: { title: params.title },
      headers: { authorization: localStorage.getItem('token')}
    }).then(response => {
      dispatch({
        type: CREATE_NOTE,
        payload: response.data
      });
    }).catch(() => {})
  };
}

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type) {
  case FETCH_NOTES:
    return { ...state, all: action.payload }
  case CREATE_NOTE:
    return { ...state, note: action.payload }
  default:
    return state;
  }
}
