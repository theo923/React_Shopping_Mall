"use strict";
exports.__esModule = true;
exports.Content = void 0;
var React = require("react");
var Contact = React.lazy(function () { return Promise.resolve().then(function () { return require('./Subpages/Contact'); }); });
var ShoppingCart = React.lazy(function () { return Promise.resolve().then(function () { return require('./Subpages/ShoppingCart/ShoppingCart'); }); });
var News = React.lazy(function () { return Promise.resolve().then(function () { return require('./Subpages/News/News'); }); });
var Tracking = React.lazy(function () { return Promise.resolve().then(function () { return require('./Subpages/Tracking/Tracking'); }); });
var Content = function (props) {
    props = props.props;
    var SwitchPages = function (page) {
        switch (page) {
            case 'contact': return React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
                React.createElement(Contact, null));
            case 'shoppingCart': return React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
                React.createElement(ShoppingCart, { props: props }));
            case 'news': return React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
                React.createElement(News, { handleSCChange: props.handleSCChange }));
            case 'tracking': return React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
                React.createElement(Tracking, { username: props.username }));
            default:
                console.log('SwitchPages: Something went wrong!!!');
                return React.createElement("div", { className: 'text-7xl' }, "Service Stop Working...");
        }
    };
    return (React.createElement("div", { className: 'm-12' }, SwitchPages(props.page)));
};
exports.Content = Content;
