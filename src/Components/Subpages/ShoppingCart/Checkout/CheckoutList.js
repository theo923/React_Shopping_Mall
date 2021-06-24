"use strict";
exports.__esModule = true;
exports.CheckoutList = void 0;
var React = require("react");
var CheckoutItem_1 = require("./CheckoutItem");
var CheckoutInfo_1 = require("./CheckoutInfo");
var SuccessPage_1 = require("./SuccessPage");
var CheckoutList = function (_a) {
    var userCart = _a.userCart, reducer = _a.reducer, handleOrder = _a.handleOrder, ordered = _a.ordered, username = _a.username, handleChange = _a.handleChange, handleCheckout = _a.handleCheckout, deliveryInfo = _a.deliveryInfo;
    return (React.createElement("div", null, !ordered ?
        React.createElement("div", null,
            React.createElement("table", { className: "table w-full" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Quantity"),
                        React.createElement("th", null, "Item Description"),
                        React.createElement("th", null, "Price"))),
                userCart.map(function (cartItem, idx) { return React.createElement(CheckoutItem_1.CheckoutItem, { key: idx, itemprice: cartItem.itemprice, attemptquantity: cartItem.attemptquantity, itemdescription: cartItem.itemdescription }); }),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null),
                        React.createElement("th", null, "Price to Pay"),
                        React.createElement("th", null, "$" + userCart.reduce(reducer, 0))))),
            React.createElement("table", { className: "table w-full" }, React.createElement(CheckoutInfo_1.CheckoutInfo, { eachInfo: deliveryInfo })),
            React.createElement("div", { className: "justify-end space-x-2 card-actions" },
                React.createElement("button", { name: 'drop', id: 'drop', onClick: handleOrder, className: "btn btn-success" }, "Order")))
        :
            React.createElement(SuccessPage_1.SuccessPage, { username: username, handleChange: handleChange, handleCheckout: handleCheckout })));
};
exports.CheckoutList = CheckoutList;
