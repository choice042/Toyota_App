sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Products", {


		onInit: function () {
				this.oRouter = this.getRouter();
			this.oRouter.getRoute("Products");
			 var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
             oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			 this.oDataGlobalModel = oDataGlobalModel;
			 
          

		},
			getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
			onServiceStatusPress: function () {
			this.oRouter.navTo("ServiceStatus");
		},
		onProductPress: function () {
			this.oRouter.navTo("Products");
		},
		onPressConfirm: function () {
			this.oRouter.navTo("confirmAppointment");
		},
		onMyServicesPress: function () {
			this.oRouter.navTo("myservices");
		},
		onBookservicePress: function () {
			this.oRouter.navTo("BookingScreen");
		},
		onPressHome: function(){
				this.oRouter.navTo("Home");
		}

	

	});

});