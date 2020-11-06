sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.myProfile", {

		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onClose: function () {
			this.getRouter().navTo("Home");
		}
	});

});