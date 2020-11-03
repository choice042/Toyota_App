sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.BookingAppointmentConfirmation", {

	
		onInit: function () {
				var oRouter = this.getRouter();
			oRouter.getRoute("confirmAppointment");
			

		},
			getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

	
	
	onClose: function(){
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.oRouter.navTo("Home");
	}

	});

});