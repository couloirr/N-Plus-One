import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import reducers from './reducers/index';


const store = createStore(
  reducers,
  composeWithDevTools(),
);

// store.dispatch(loadMarkets());

export default store;