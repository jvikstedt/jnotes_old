'use strict';

import { browserHistory } from 'react-router';
import axios from 'axios';
import config from 'config';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';

export function signin(email, password) {
  return function(dispatch) {
    axios.post(`${config.API_URL}/user_token`, { auth: { email: email, password: password } })
      .then(response => {
        dispatch({ type: AUTH_USER })

        localStorage.setItem('token', response.data.jwt);

        browserHistory.push('/');
      }).catch(() => {
        dispatch({
          type: AUTH_ERROR,
          payload: 'Authentication error'
        })
      })
  }
}

export default function reducer(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return {...state, authenticated: true}
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }

  return state
}
