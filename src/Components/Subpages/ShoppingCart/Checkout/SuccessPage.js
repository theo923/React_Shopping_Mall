"use strict";
exports.__esModule = true;
exports.SuccessPage = void 0;
var React = require("react");
var SuccessPage = function (_a) {
    var username = _a.username, handleChange = _a.handleChange, handleCheckout = _a.handleCheckout;
    return (React.createElement("div", null,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("div", { className: 'flex flex-col justify-items-center items-center gap-5' },
            React.createElement("div", { className: "text-3xl md:text-4xl lg:text-5xl" },
                "Congratulations user ",
                username),
            React.createElement("div", { className: "text-3xl md:text-4xl lg:text-5xl" }, "You have ordered successfully!!")),
        React.createElement("div", { className: ' justify-center space-x-2 card-actions gap-4' },
            React.createElement("button", { name: 'page', value: 'tracking', className: "btn btn-secondary", onClick: function (e) { return handleChange(e); } }, "view my order "),
            React.createElement("button", { name: 're-order', className: "btn btn-accent", onClick: function (e) { handleCheckout('checkout', false); handleChange(e); } }, "order again"))));
};
exports.SuccessPage = SuccessPage;
