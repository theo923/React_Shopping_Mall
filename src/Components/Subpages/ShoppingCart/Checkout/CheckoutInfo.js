"use strict";
exports.__esModule = true;
exports.CheckoutInfo = void 0;
var React = require("react");
var CheckoutInfo = function (_a) {
    var eachInfo = _a.eachInfo;
    var username = eachInfo.username, firstName = eachInfo.firstName, lastName = eachInfo.lastName, phoneNumber = eachInfo.phoneNumber, postCode = eachInfo.postCode, Address1 = eachInfo.Address1, Address2 = eachInfo.Address2, townCity = eachInfo.townCity, county = eachInfo.county;
    return (React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("th", null, "Username"),
            React.createElement("td", null, username)),
        React.createElement("tr", null,
            React.createElement("th", null, "First Name"),
            React.createElement("td", null, firstName)),
        React.createElement("tr", null,
            React.createElement("th", null, "Last Name"),
            React.createElement("td", null, lastName)),
        React.createElement("tr", null,
            React.createElement("th", null, "Phone Number"),
            React.createElement("td", null, phoneNumber)),
        React.createElement("tr", null,
            React.createElement("th", null, "Post Code"),
            React.createElement("td", null, postCode)),
        React.createElement("tr", null,
            React.createElement("th", null, "Address 1"),
            React.createElement("td", null, Address1)),
        React.createElement("tr", null,
            React.createElement("th", null, "Address 2"),
            React.createElement("td", null, Address2)),
        React.createElement("tr", null,
            React.createElement("th", null, "Town / City"),
            React.createElement("td", null, townCity)),
        React.createElement("tr", null,
            React.createElement("th", null, "County"),
            React.createElement("td", null, county))));
};
exports.CheckoutInfo = CheckoutInfo;
