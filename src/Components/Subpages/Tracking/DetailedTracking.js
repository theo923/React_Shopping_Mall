"use strict";
exports.__esModule = true;
exports.DetailedTracking = void 0;
var React = require("react");
var CheckoutInfo_1 = require("../ShoppingCart/Checkout/CheckoutInfo");
var CheckoutItem_1 = require("../ShoppingCart/Checkout/CheckoutItem");
var DetailedTracking = function (_a) {
    var order = _a.order, idx = _a.idx;
    var reducer = function (accumulator, currentObject) { return accumulator + (currentObject.quan * currentObject.price); };
    var orderedItem = order[0];
    var orderedDeliveryInfo = order[1];
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("div", { className: "container glass text-neutral-content mb-6" },
                React.createElement("figure", { className: "px-6 relative" },
                    React.createElement("div", { style: { width: '266.67px', height: '150px' }, className: "float-right" },
                        React.createElement("img", { src: orderedItem[0].url, alt: orderedItem[0].name }))),
                React.createElement("div", { className: "card-body max-h-full max-w-full relative" },
                    React.createElement("h2", { className: "card-title" },
                        "Order #",
                        idx),
                    React.createElement("div", null, orderedItem.map(function (item, idx) { return React.createElement("div", { key: idx, className: 'italic' },
                        item.name,
                        " $",
                        item.quan * item.price,
                        " @ ",
                        item.quan,
                        " "); }))))),
        React.createElement("table", { className: "table w-full" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Quantity"),
                    React.createElement("th", null, "Item Description"),
                    React.createElement("th", null, "Price"))),
            orderedItem.map(function (cartItem, idx) { return React.createElement(CheckoutItem_1.CheckoutItem, { key: idx, itemprice: cartItem.price, attemptquantity: cartItem.quan, itemdescription: cartItem.name }); }),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("th", null),
                    React.createElement("th", null, "Price to Pay"),
                    React.createElement("th", null, orderedItem.reduce(reducer, 0))))),
        React.createElement("table", { className: "table w-full" },
            React.createElement(CheckoutInfo_1.CheckoutInfo, { key: idx, eachInfo: orderedDeliveryInfo[0] }))));
};
exports.DetailedTracking = DetailedTracking;
