sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Products", {


		onInit: function () {
				var oRouter = this.getRouter();
			oRouter.getRoute("Products");

		},
			getRouter: function () {
			return UIComponent.getRouterFor(this);
		}

	

	});

});