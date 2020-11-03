sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Home", {

	
		onInit: function () {
	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
serviceStatus: function(){
	this.oRouter.navTo("ServiceStatus");
},
Products: function(){
	this.oRouter.navTo("Products");
},
onPressConfirm: function(){
	this.oRouter.navTo("confirmAppointment");
}

	});

});