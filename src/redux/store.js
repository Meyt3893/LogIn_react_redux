import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import initialState from '../initialState'

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
export default store;

