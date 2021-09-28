import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "https://squareboat-api.herokuapp.com/api/";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("Token");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
