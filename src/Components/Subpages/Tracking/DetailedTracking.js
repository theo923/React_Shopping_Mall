"use strict";
exports.__esModule = true;
exports.DetailedTracking = void 0;
var React = require("react");
var CheckoutInfo_1 = require("../ShoppingCart/Checkout/CheckoutInfo");
var CheckoutItem_1 = require("../ShoppingCart/Checkout/CheckoutItem");
var DetailedTracking = function (_a) {
    var order = _a.order, idx = _a.idx, handleBack = _a.handleBack;
    var reducer = function (accumulator, currentObject) { return accumulator + (currentObject.quan * currentObject.price); };
    var orderedItem = order[0];
    var orderedDeliveryInfo = order[1];
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("button", { className: 'btn btn-ghost btn-sm rounded-btn', onClick: function () { return handleBack(); } }, "Back"),
            React.createElement("div", { className: "container glass text-neutral-content pb-28 mb-6" },
                React.createElement("figure", { className: "flex flex-row justify-center self-center pb-6 mt-8 md:p-6 lg:py-0 mb-8 float-right", style: { width: '266.67px', height: '150px', objectFit: 'fill' } },
                    React.createElement("img", { className: 'h-full', src: orderedItem[0].url, alt: orderedItem[0].name })),
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
        React.createElement("div", { className: 'overflow-x-auto' },
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Quan"),
                        React.createElement("th", null, "Description"),
                        React.createElement("th", null, "Price"))),
                orderedItem.map(function (cartItem, idx) { return React.createElement(CheckoutItem_1.CheckoutItem, { key: idx, itemprice: cartItem.price, attemptquantity: cartItem.quan, itemdescription: cartItem.name }); }),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null),
                        React.createElement("th", null, "Price to Pay"),
                        React.createElement("th", null, orderedItem.reduce(reducer, 0)))))),
        React.createElement("table", { className: "table" },
            React.createElement(CheckoutInfo_1.CheckoutInfo, { key: idx, eachInfo: orderedDeliveryInfo[0] }))));
};
exports.DetailedTracking = DetailedTracking;
