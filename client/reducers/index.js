import { combineReducers } from 'redux';
import userReducer from './userReducer.js';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
