sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter"
], function (Controller,formatter) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.MyCars", {

		formatter: formatter,
		onInit: function () {
			 var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
             oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			 this.oDataGlobalModel = oDataGlobalModel;
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.getRoute("MyCars");
		},
		onNavBack: function () {
				this.oRouter.navTo("Home");
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