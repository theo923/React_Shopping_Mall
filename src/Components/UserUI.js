"use strict";
exports.__esModule = true;
exports.UserUI = void 0;
var React = require("react");
var Navigation_1 = require("./Navigation");
var Content_1 = require("./Content");
var UserUI = function (props) {
    return (React.createElement("div", { className: "flex justify-center min-h-screen bg-base-100 text-white" },
        React.createElement("div", { className: 'container p-4 lg:m-36 bg-base-200 rounded-box shadow-lg' },
            React.createElement(Navigation_1.Navigation, { handleChange: props.handleChange }),
            React.createElement(Content_1.Content, { props: props }))));
};
exports.UserUI = UserUI;
