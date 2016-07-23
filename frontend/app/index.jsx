'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from 'components/app';
import Notes from 'containers/notes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Notes}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
