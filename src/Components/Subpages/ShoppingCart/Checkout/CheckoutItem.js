"use strict";
exports.__esModule = true;
exports.CheckoutItem = void 0;
var React = require("react");
var CheckoutItem = function (_a) {
    var itemprice = _a.itemprice, attemptquantity = _a.attemptquantity, itemdescription = _a.itemdescription;
    return (React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("th", null, attemptquantity),
            React.createElement("td", null, itemdescription),
            React.createElement("th", null, "$" + attemptquantity * itemprice))));
};
exports.CheckoutItem = CheckoutItem;
