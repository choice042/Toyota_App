sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Notifications", {

		onInit: function () {

		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onClose: function () {
			this.getRouter().navTo("Home");
			console.log("sample");
		}

	});

});