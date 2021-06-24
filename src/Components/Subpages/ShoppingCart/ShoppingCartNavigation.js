"use strict";
exports.__esModule = true;
exports.ShoppingCartNavigation = void 0;
var React = require("react");
var ShoppingCartNavigation = function (_a) {
    var ordered = _a.ordered, checkout = _a.checkout;
    var validateStep = function (status) {
        return status ? 'step-info' : '';
    };
    return (React.createElement("div", null,
        React.createElement("ul", { className: "steps w-full" },
            React.createElement("li", { className: "step step-info" }, "Shopping Cart"),
            React.createElement("li", { className: "step " + (validateStep(checkout) || validateStep(ordered)) }, "Checkout"),
            React.createElement("li", { className: "step " + validateStep(ordered) }, "Order"))));
};
exports.ShoppingCartNavigation = ShoppingCartNavigation;
