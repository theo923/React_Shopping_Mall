"use strict";
exports.__esModule = true;
exports.TrackingCard = void 0;
var React = require("react");
var TrackingCard = function (_a) {
    var order = _a.order, idx = _a.idx, handleViewDetail = _a.handleViewDetail;
    var orderedItem = order[0];
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("div", { className: "card glass lg:card-side text-neutral-content mb-6" },
                React.createElement("figure", { className: "p-6 lg:py-0 mb-8" },
                    React.createElement("div", { style: { width: '266.67px', height: '150px' } },
                        React.createElement("img", { src: orderedItem[0].url, alt: orderedItem[0].name }))),
                React.createElement("div", { className: "card-body max-h-full max-w-full" },
                    React.createElement("h2", { className: "card-title" },
                        "Order #",
                        idx),
                    React.createElement("div", null, orderedItem.map(function (item, idx) { return React.createElement("div", { key: idx, className: 'italic' },
                        item.name,
                        " $",
                        item.quan * item.price,
                        " @ ",
                        item.quan,
                        " "); })),
                    React.createElement("div", { className: 'justify-end space-x-2 card-actions' },
                        React.createElement("button", { onClick: function () { return handleViewDetail(idx); }, className: "btn glass rounded-full" }, "Click for detailed info")))))));
};
exports.TrackingCard = TrackingCard;
