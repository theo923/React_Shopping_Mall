"use strict";
exports.__esModule = true;
exports.CartContent = void 0;
var React = require("react");
var ShoppingItem_1 = require("./ShoppingItem");
var DeliveryForm_1 = require("./DeliveryForm");
var CartContent = function (_a) {
    var reducer = _a.reducer, handleCheckout = _a.handleCheckout, handleSCChange = _a.handleSCChange, userCart = _a.userCart, handleDeliveryInfo = _a.handleDeliveryInfo, deliveryInfo = _a.deliveryInfo, valid = _a.valid;
    React.useEffect(function () {
        for (var _i = 0, _a = Object.entries(deliveryInfo); _i < _a.length; _i++) {
            var _b = _a[_i], info = _b[0], value = _b[1];
            if (value === '' || info === '')
                return handleCheckout('valid', true);
        }
        return handleCheckout('valid', false);
    }, [deliveryInfo]);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("div", { className: "overflow-x-auto " },
                React.createElement("table", { className: "table w-full" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null,
                                React.createElement("label", null,
                                    React.createElement("input", { id: 'checkedAll', onChange: function (e) { return handleSCChange(e); }, type: "checkbox", className: "checkbox" }),
                                    React.createElement("span", { className: "checkbox-mark" }))),
                            React.createElement("th", null, "Item Name"),
                            React.createElement("th", null, "Item Description"),
                            React.createElement("th", null, "Quantity"),
                            React.createElement("th", null, "Total"))),
                    userCart.length > 0 ?
                        userCart.map(function (cartItem, idx) { return React.createElement(ShoppingItem_1.ShoppingItem, { key: idx, cartItem: cartItem, handleSCChange: handleSCChange }); })
                        :
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null),
                                    React.createElement("td", null, "Please insert any item to the cart first"),
                                    React.createElement("td", null),
                                    React.createElement("td", null),
                                    React.createElement("td", null))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("th", null),
                            React.createElement("th", null),
                            React.createElement("th", null),
                            React.createElement("th", null, "Total Price"),
                            React.createElement("th", null, "$" + userCart.reduce(reducer, 0)))))),
            React.createElement(DeliveryForm_1.DeliveryForm, { deliveryInfo: deliveryInfo, handleDeliveryInfo: handleDeliveryInfo }),
            React.createElement("div", { className: "justify-end space-x-2 card-actions gap-4" },
                React.createElement("button", { id: 'drop', onClick: handleSCChange, className: "btn btn-error" }, "Delete"),
                React.createElement("button", { id: 'drop', disabled: (Boolean(userCart.length < 1) || valid), onClick: function () { return handleCheckout('checkout', true); }, className: "btn btn-success" }, "Checkout")))));
};
exports.CartContent = CartContent;
