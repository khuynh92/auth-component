import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isLoggedIn from '../reducer/loggedIn.js';

import logger from '../middleware/logger.js';

import errorHandler from '../middleware/errorHandler.js';

const appReducer = combineReducers({
  isLoggedIn,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, errorHandler, logger)));

