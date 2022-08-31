import React from "react";
import { ReactDOM } from "react";
import { render } from "react-dom";
import App from "./App"
import styles from "./css/app.css"
// import { Provider } from 'react-redux';
import store from './store'

render(<App />, document.getElementById("root") );
// render(
// <Provider store={store}>
// <App />
// </Provider>, 
// document.getElementById("root")
//  );
