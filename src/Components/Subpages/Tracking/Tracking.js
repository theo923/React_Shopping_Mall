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
var TrackingCard_1 = require("./TrackingCard");
var DetailedTracking_1 = require("./DetailedTracking");
var Tracking = /** @class */ (function (_super) {
    __extends(Tracking, _super);
    function Tracking(props) {
        var _this = _super.call(this, props) || this;
        _this.handleViewDetail = function (ordernumber) {
            _this.setState({ orderNum: ordernumber, orderView: true });
        };
        _this.handleBack = function () {
            _this.setState({ orderView: false });
        };
        _this.state = {
            orderView: false,
            orderNum: 0,
            orderList: []
        };
        return _this;
    }
    Tracking.prototype.componentDidMount = function () {
        var _this = this;
        this.readTrackApi()
            .then(function (data) {
            var selectedList = data.slice(0).reverse();
            _this.setState({ orderList: selectedList });
            console.log('render');
        });
    };
    Tracking.prototype.readTrackApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://enigmatic-mesa-83961.herokuapp.com/track', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                username: this.props.username
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
    Tracking.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, !this.state.orderView ?
            React.createElement("div", null,
                React.createElement("div", { className: 'text-4xl mb-6' },
                    "Tracking for ",
                    this.props.username),
                this.state.orderList.map(function (order, idx, arr) { return React.createElement(TrackingCard_1.TrackingCard, { key: idx, idx: arr.length - idx - 1, order: order, handleViewDetail: _this.handleViewDetail }); }))
            :
                React.createElement("div", null, this.state.orderList.map(function (order, idx, arr) { return (arr.length - idx - 1 === _this.state.orderNum) ? React.createElement(DetailedTracking_1.DetailedTracking, { key: idx, idx: arr.length - idx - 1, handleBack: _this.handleBack, order: order }) : null; }))));
    };
    return Tracking;
}(React.Component));
exports["default"] = Tracking;
