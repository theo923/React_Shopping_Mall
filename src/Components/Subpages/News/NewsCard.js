"use strict";
exports.__esModule = true;
exports.NewsCard = void 0;
var React = require("react");
var NewsCard = function (_a) {
    var news = _a.news, handleSCChange = _a.handleSCChange;
    var newsimage = news.newsimage, newsheading = news.newsheading, newscontent = news.newscontent, newsitem = news.newsitem;
    return (React.createElement("div", null,
        React.createElement("div", { className: "card glass lg:card-side text-neutral-content mb-6" },
            React.createElement("figure", { className: "p-6" },
                React.createElement("img", { src: newsimage, style: { width: '444.44px', height: '250px' }, alt: newsheading, className: "rounded-lg shadow-lg" })),
            React.createElement("div", { className: "card-body max-h-full max-w-full" },
                React.createElement("h2", { className: "card-title" }, newsheading),
                React.createElement("p", { className: ' h-32' }, newscontent),
                React.createElement("div", { className: 'justify-end space-x-2 card-actions' },
                    React.createElement("button", { name: newsitem, id: 'add', onClick: function (e) { return handleSCChange(e); }, className: "btn glass rounded-full" }, "Add to Cart"))))));
};
exports.NewsCard = NewsCard;
