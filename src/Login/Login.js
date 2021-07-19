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
exports.__esModule = true;
var React = require("react");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.onUsernameChange = function (e) {
            _this.setState({ username: e.currentTarget.value });
        };
        _this.onPasswordChange = function (e) {
            _this.setState({ password: e.currentTarget.value });
        };
        _this.onSubmitSignIn = function () {
            _this.readSignInApi()
                .then(function (data) {
                if (data === 'Wrong username or password')
                    console.log(data);
                else if (data) {
                    _this.props.handleSubmit();
                    _this.props.loadUser(data);
                }
            });
        };
        _this.state = {
            username: '',
            password: ''
        };
        return _this;
    }
    Login.prototype.readSignInApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://enigmatic-mesa-83961.herokuapp.com/signin', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                username: this.state.username,
                                password: this.state.password
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
    Login.prototype.render = function () {
        console.log(process.env.REACT_APP_IP);
        return (React.createElement("div", { className: "hero min-h-screen bg-base-200 text-white" },
            React.createElement("div", { className: "flex-col justify-center hero-content" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("h1", { className: "mb-5 text-5xl font-bold" }, "Welcome to Shopping Site"),
                    React.createElement("p", { className: "mb-5" }, "Please login first")),
                React.createElement("div", { className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("div", { className: "form-control" },
                            React.createElement("label", { htmlFor: 'username', className: "label" },
                                React.createElement("span", { className: "label-text" }, "Username")),
                            React.createElement("input", { id: 'username', name: 'username', type: "text", placeholder: "username", className: "input input-bordered", onChange: this.onUsernameChange })),
                        React.createElement("div", { className: "form-control" },
                            React.createElement("label", { htmlFor: 'password', className: "label" },
                                React.createElement("span", { className: "label-text" }, "Password")),
                            React.createElement("input", { id: 'password', name: 'password', type: "text", placeholder: "password", className: "input input-bordered", onChange: this.onPasswordChange }),
                            React.createElement("label", { className: "label" },
                                React.createElement("button", { name: 'register', className: "label-text-alt", onClick: this.props.handleChange }, "new user? click here to register"))),
                        React.createElement("div", { className: "form-control mt-6" },
                            React.createElement("input", { type: "button", value: "Login", className: "btn btn-primary", onClick: this.onSubmitSignIn })))))));
    };
    return Login;
}(React.Component));
exports["default"] = Login;
