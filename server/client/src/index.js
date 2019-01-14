// essentially the redux side of our application
// also we use this to render our root components inside this file
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// this createStore helper is to create an instance of our redux store
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

// first parameter is all the reducers
// second parameter is the initial state of our application
// third parameter is the store enhancer that apply middleware to the dispatch method of the redux store
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  // pass the store we just created as a prop
  // so Provider will be the parent component of this whole application and whenever state in store has changed, child component can be notofied
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
