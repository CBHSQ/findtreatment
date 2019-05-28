import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_FEDERALIST_BASEURL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
