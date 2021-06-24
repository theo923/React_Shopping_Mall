"use strict";
exports.__esModule = true;
exports.DeliveryForm = void 0;
var React = require("react");
var DeliveryForm = function (_a) {
    var handleDeliveryInfo = _a.handleDeliveryInfo, deliveryInfo = _a.deliveryInfo;
    var firstName = deliveryInfo.firstName, lastName = deliveryInfo.lastName, phoneNumber = deliveryInfo.phoneNumber, postCode = deliveryInfo.postCode, Address1 = deliveryInfo.Address1, Address2 = deliveryInfo.Address2, townCity = deliveryInfo.townCity, county = deliveryInfo.county;
    return (React.createElement("div", { className: 'form-control' },
        React.createElement("div", { className: "flex flex-wrap gap-10 mt-5" },
            React.createElement("label", { className: "label" },
                React.createElement("span", { className: "label-text" }, "Please enter your information below"))),
        React.createElement("div", { className: "flex flex-wrap gap-10 mt-5" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'firstName', className: "label" },
                    React.createElement("span", { className: "label-text" }, "First Name:")),
                React.createElement("input", { id: 'firstName', name: 'firstName', value: firstName, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "First Name", className: "input input-bordered" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'lastName', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Last Name:")),
                React.createElement("input", { id: 'lastName', name: 'lastName', value: lastName, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Last Name", className: "input input-bordered" }))),
        React.createElement("div", { className: "flex flex-wrap gap-10 mt-5" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'phoneNumber', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Phone Number")),
                React.createElement("input", { id: 'phoneNumber', name: 'phoneNumber', value: phoneNumber, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Phone Number", className: "input input-bordered" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'postCode', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Post Code")),
                React.createElement("input", { id: 'postCode', name: 'postCode', value: postCode, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Post Code", className: "input input-bordered" }))),
        React.createElement("div", { className: "flex flex-wrap gap-10 mt-5" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'Address1', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Address line 1 (or Company name)")),
                React.createElement("input", { id: 'Address1', name: 'Address1', value: Address1, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Address line 1 (or Company name)", className: "input input-bordered" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'Address2', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Address line 2 (optional)")),
                React.createElement("input", { id: 'Address2', name: 'Address2', value: Address2, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Address line 2 (optional)", className: "input input-bordered" }))),
        React.createElement("div", { className: "flex flex-wrap gap-10 mt-5" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'townCity', className: "label" },
                    React.createElement("span", { className: "label-text" }, "Town/City")),
                React.createElement("input", { id: 'townCity', name: 'townCity', value: townCity, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "Town/City", className: "input input-bordered" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: 'county', className: "label" },
                    React.createElement("span", { className: "label-text" }, "County")),
                React.createElement("input", { id: 'county', name: 'county', value: county, onChange: function (e) { return handleDeliveryInfo(e); }, type: "text", placeholder: "County", className: "input input-bordered" })))));
};
exports.DeliveryForm = DeliveryForm;
