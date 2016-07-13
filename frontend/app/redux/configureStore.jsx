'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import notes from './modules/notes';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const reducer = combineReducers({
  notes
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
