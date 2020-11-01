sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.ServiceStatus", {

	
		onInit: function () {
				var oRouter = this.getRouter();
			oRouter.getRoute("ServiceStatus");

		},
			getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onCall: function(){
			sap.m.URLHelper.triggerTel("+91 8218975934");
		}
	

	});

});