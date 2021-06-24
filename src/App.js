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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var React = require("react");
var Login_1 = require("./Login/Login");
var Register_1 = require("./Login/Register");
var UserUI_1 = require("./Components/UserUI");
var initialState = {
    valid: false,
    page: 'news',
    userCart: [],
    ordered: false,
    register: false,
    deliveryInfo: {
        Address1: "",
        Address2: "",
        county: "",
        firstName: "",
        lastName: "",
        phoneNumber: 0,
        postCode: "",
        townCity: "",
        username: ""
    },
    user: {
        id: 0,
        username: '',
        password: '',
        joined: '',
        orders: []
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.loadUser = function (data) {
            _this.setState({
                user: {
                    id: data.id,
                    username: data.username,
                    joined: data.joined,
                    orders: data.orders
                },
                deliveryInfo: __assign(__assign({}, initialState.deliveryInfo), { username: data.username })
            });
        };
        _this.handleChange = function (e) {
            console.log(typeof e);
            var _a = e.currentTarget, name = _a.name, value = _a.value;
            console.log(name, value);
            switch (name) {
                case 'logout':
                    _this.setState(initialState);
                    break;
                case 're-order':
                    _this.setState({ ordered: false });
                    break;
                case 'register':
                    _this.setState({ register: !_this.state.register });
                    break;
                default:
                    _this.setState(function (prevState) {
                        var _a;
                        return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
                    });
                    break;
            }
        };
        _this.handleSubmit = function () {
            _this.setState({ valid: true });
        };
        _this.handleDeliveryInfo = function (info) {
            var _a;
            var _b = info.currentTarget, name = _b.name, value = _b.value;
            var deliveryInfo = _this.state.deliveryInfo;
            var obj = __assign(__assign({}, deliveryInfo), (_a = {}, _a[name] = value, _a));
            _this.setState({ deliveryInfo: obj });
        };
        _this.handleOrder = function () {
            _this.readOrderApi()
                .then(function (data) {
                if (data === 'failed')
                    console.log('failed');
                else {
                    _this.setState({ ordered: true });
                    console.log('ordered', data);
                    _this.destroy();
                }
            });
        };
        _this.handleShoppingCartChange = function (e) {
            var id = e.currentTarget.id;
            if (id === 'drop')
                _this.drop();
            else if (id === 'checkedAll')
                _this.checkedAll();
            else {
                _this.readItemListApi(e)
                    .then(function (item) {
                    switch (id) {
                        case 'add':
                            _this.add(item);
                            break;
                        case 'isChecked':
                            _this.isChecked(item);
                            break;
                        case 'addcounter':
                            _this.addcounter(item);
                            break;
                        case 'decrement':
                            _this.decrement(item);
                            break;
                        default:
                    }
                })["catch"](function (err) { return console.error(err); });
            }
        };
        _this.add = function (item) {
            var userCart = _this.state.userCart;
            var bool = false;
            for (var _i = 0, userCart_1 = userCart; _i < userCart_1.length; _i++) {
                var cartItem = userCart_1[_i];
                console.log('usercart', userCart, cartItem);
                if (cartItem.itemid === item.itemid) {
                    bool = true;
                    break;
                }
            }
            if (!bool) {
                var arr = __spreadArray(__spreadArray([], userCart), [__assign(__assign({}, item), { attemptquantity: 1, itemchecked: false })]);
                console.log('add', arr);
                _this.setState({ userCart: arr });
            }
        };
        _this.drop = function () {
            var userCart = _this.state.userCart;
            var arr = userCart.filter(function (cartItem) { return cartItem.itemchecked === false; });
            console.log('drop', arr);
            _this.setState({ userCart: arr });
        };
        _this.destroy = function () {
            console.log('destroy');
            _this.setState({ userCart: [] });
        };
        _this.addcounter = function (item) {
            var userCart = _this.state.userCart;
            var arr = userCart.map(function (cartItem) { return (cartItem.itemid === item.itemid && cartItem.attemptquantity < cartItem.limitedquantity) ? __assign(__assign({}, cartItem), { attemptquantity: cartItem.attemptquantity + 1 }) : cartItem; });
            console.log('addcounter', arr);
            _this.setState({ userCart: arr });
        };
        _this.decrement = function (item) {
            var userCart = _this.state.userCart;
            var arr = userCart.map(function (cartItem) { return (cartItem.itemid === item.itemid && cartItem.attemptquantity > 1) ? __assign(__assign({}, cartItem), { attemptquantity: cartItem.attemptquantity - 1 }) : cartItem; });
            console.log('decrement', arr);
            _this.setState({ userCart: arr });
        };
        _this.isChecked = function (item) {
            var userCart = _this.state.userCart;
            var arr = userCart.map(function (cartItem) { return (cartItem.itemid === item.itemid) ? __assign(__assign({}, cartItem), { itemchecked: !cartItem.itemchecked }) : cartItem; });
            console.log('isChecked', arr);
            _this.setState({ userCart: arr });
        };
        _this.checkedAll = function () {
            var userCart = _this.state.userCart;
            var arr = userCart.map(function (cartItem) { return __assign(__assign({}, cartItem), { itemchecked: !cartItem.itemchecked }); });
            console.log('checkedAll', arr);
            _this.setState({ userCart: arr });
        };
        _this.state = initialState;
        return _this;
    }
    App.prototype.readOrderApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://enigmatic-mesa-83961.herokuapp.com/order', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: this.state.user.id,
                                attemptOrder: [this.state.userCart, __assign(__assign({}, this.state.deliveryInfo), { username: this.state.user.username })]
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    App.prototype.readItemListApi = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://enigmatic-mesa-83961.herokuapp.com/itemlist', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: e.currentTarget.name,
                                id: e.currentTarget.id
                            })
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    App.prototype.render = function () {
        return (React.createElement("div", null, !this.state.register && !this.state.valid ?
            React.createElement(Login_1["default"], { handleChange: this.handleChange, handleSubmit: this.handleSubmit, loadUser: this.loadUser })
            :
                this.state.register ?
                    React.createElement(Register_1["default"], { handleChange: this.handleChange, handleSubmit: this.handleSubmit })
                    :
                        React.createElement(UserUI_1.UserUI, { handleChange: this.handleChange, username: this.state.user.username, page: this.state.page, handleSCChange: this.handleShoppingCartChange, userCart: this.state.userCart, handleOrder: this.handleOrder, ordered: this.state.ordered, deliveryInfo: this.state.deliveryInfo, handleDeliveryInfo: this.handleDeliveryInfo })));
    };
    return App;
}(React.Component));
exports["default"] = App;
