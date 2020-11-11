sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.ProductsDetails", {

	
		onInit: function () {
	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("productDetail");
		},
		onClose: function(){
			this.oRouter.navTo("Home");
		}

	});

});