import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import { getUser } from './actions/userActions.js';

// const initialState = {};
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// store.dispatch(getUser())

export default store;
