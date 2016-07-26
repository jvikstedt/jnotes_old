'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/configure-store';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from 'components/app';
import Notes from 'components/notes';
import Signin from 'containers/auth/signin';

import { AUTH_USER } from 'redux/modules/auth';

const store = configureStore();

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Notes}/>
        <Route path="signin" component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
