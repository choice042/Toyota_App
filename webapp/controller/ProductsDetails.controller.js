sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent",
		"sap/ui/core/routing/History"
], function (Controller,UIComponent,History) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.ProductsDetails", {

	
		onInit: function () {
	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("productDetail");
		},
		onClose: function(){
			this.oRouter.navTo("Home");
		},
			onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		}

	});

});