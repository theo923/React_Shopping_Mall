"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var CheckoutList_1 = require("./Checkout/CheckoutList");
var CartContent_1 = require("./CartContent");
var SuccessPage_1 = require("./Checkout/SuccessPage");
var ShoppingCartNavigation_1 = require("./ShoppingCartNavigation");
var ShoppingCart = /** @class */ (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart(props) {
        var _this = _super.call(this, props) || this;
        _this.reducer = function (accumulator, currentObject) { return accumulator + (currentObject.attemptquantity * currentObject.itemprice); };
        _this.handleCheckout = function (name, bool) {
            name === 'valid' ? _this.setState({ valid: bool }) : _this.setState({ checkout: bool });
        };
        _this.state = {
            checkout: false,
            valid: false
        };
        return _this;
    }
    ShoppingCart.prototype.render = function () {
        var _a = this.props.props, userCart = _a.userCart, handleSCChange = _a.handleSCChange, handleOrder = _a.handleOrder, ordered = _a.ordered, username = _a.username, handleChange = _a.handleChange, handleDeliveryInfo = _a.handleDeliveryInfo, deliveryInfo = _a.deliveryInfo;
        return (React.createElement("div", null,
            React.createElement(ShoppingCartNavigation_1.ShoppingCartNavigation, { ordered: ordered, checkout: this.state.checkout }),
            !ordered ?
                !this.state.checkout ?
                    React.createElement(CartContent_1.CartContent, { reducer: this.reducer, handleCheckout: this.handleCheckout, handleSCChange: handleSCChange, userCart: userCart, handleDeliveryInfo: handleDeliveryInfo, deliveryInfo: deliveryInfo, valid: this.state.valid })
                    :
                        React.createElement(CheckoutList_1.CheckoutList, { userCart: userCart, reducer: this.reducer, handleOrder: handleOrder, ordered: ordered, username: username, handleChange: handleChange, handleCheckout: this.handleCheckout, deliveryInfo: deliveryInfo })
                :
                    React.createElement(SuccessPage_1.SuccessPage, { username: username, handleChange: handleChange, handleCheckout: this.handleCheckout })));
    };
    return ShoppingCart;
}(React.Component));
exports["default"] = ShoppingCart;
