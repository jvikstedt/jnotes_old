'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const reducer = combineReducers({
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
