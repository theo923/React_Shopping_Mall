"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var serviceWorkerRegistration = require("./serviceWorkerRegistration");
var reportWebVitals_1 = require("./reportWebVitals");
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App_1["default"], null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
