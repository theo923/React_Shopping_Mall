"use strict";
exports.__esModule = true;
exports.Navigation = void 0;
var React = require("react");
var Navigation = function (_a) {
    var handleChange = _a.handleChange;
    return (React.createElement("div", { className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box" },
        React.createElement("div", { className: "flex-1 px-0 mx-0 lg:px-2 lg:mx-2 " },
            React.createElement("div", { className: "items-stretch flex" },
                React.createElement("button", { name: 'page', value: 'news', className: "btn btn-ghost btn-sm rounded-btn", onClick: function (e) { return handleChange(e); } }, "News"),
                React.createElement("button", { name: 'page', value: 'shoppingCart', className: "btn btn-ghost btn-sm rounded-btn", onClick: function (e) { return handleChange(e); } }, "ShoppinCart"),
                React.createElement("button", { name: 'page', value: 'tracking', className: "btn btn-ghost btn-sm rounded-btn", onClick: function (e) { return handleChange(e); } }, "Tracking"),
                React.createElement("button", { name: 'page', value: 'contact', className: "btn btn-ghost btn-sm rounded-btn", onClick: function (e) { return handleChange(e); } }, "Contact"))),
        React.createElement("div", { className: "flex-none" },
            React.createElement("button", { name: "logout", value: 'logout', className: "btn btn-sm rounded-btn btn-ghost", onClick: function (e) { return handleChange(e); } },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", className: "inline-block w-6 h-6 stroke-current text-error" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))))));
};
exports.Navigation = Navigation;
