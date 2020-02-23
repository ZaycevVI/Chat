import React from "react";
import ReactDOM from "react-dom";
import "styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducers";
import thunk from "redux-thunk";
import axios from "axios";
import * as requestInterceptors from "interceptors/request";
import {successHandler, errorHandler} from "interceptors/response";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

Object.keys(requestInterceptors).forEach(key =>
  axios.interceptors.request.use(requestInterceptors[key](store))
);

axios.interceptors.response.use(successHandler(store), errorHandler(store))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
