"use strict";
exports.__esModule = true;
exports.ShoppingItem = void 0;
var React = require("react");
var ShoppingItem = function (_a) {
    var cartItem = _a.cartItem, handleSCChange = _a.handleSCChange;
    var itemname = cartItem.itemname, itemprice = cartItem.itemprice, itemtype = cartItem.itemtype, itemdescription = cartItem.itemdescription, itemimage = cartItem.itemimage, limitedquantity = cartItem.limitedquantity, attemptquantity = cartItem.attemptquantity, itemchecked = cartItem.itemchecked;
    return (React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("th", null,
                React.createElement("label", null,
                    React.createElement("input", { name: itemname, id: 'isChecked', type: "checkbox", className: "checkbox", checked: Boolean(itemchecked), onChange: function (e) { return handleSCChange(e); } }),
                    React.createElement("span", { className: "checkbox-mark" }))),
            React.createElement("td", null,
                React.createElement("div", { className: "flex items-center space-x-3" },
                    React.createElement("div", { className: "avatar" },
                        React.createElement("div", { className: "w-12 h-12 mask mask-squircle" },
                            React.createElement("img", { src: itemimage, alt: itemname }))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "font-bold" }, itemname),
                        React.createElement("div", { className: "text-sm opacity-50" }, itemtype)))),
            React.createElement("td", null,
                itemdescription,
                React.createElement("br", null),
                React.createElement("span", { className: "badge badge-outline badge-sm" },
                    "$",
                    itemprice,
                    " Per one")),
            React.createElement("td", null,
                React.createElement("button", { name: itemname, id: 'decrement', onClick: function (e) { return handleSCChange(e); }, className: "btn btn-ghost btn-xs " }, "-"),
                attemptquantity === limitedquantity ? attemptquantity + " (Max)" : attemptquantity,
                React.createElement("button", { name: itemname, id: 'addcounter', onClick: function (e) { return handleSCChange(e); }, className: "btn btn-ghost btn-xs " }, "+")),
            React.createElement("th", null,
                React.createElement("button", { className: "btn btn-ghost btn-xs" },
                    "$",
                    attemptquantity * itemprice)))));
};
exports.ShoppingItem = ShoppingItem;
