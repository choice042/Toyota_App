sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Products", {

		onInit: function () {
			this.oRouter = this.getRouter();
			this.oRouter.getRoute("Products");
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;
			this.onProductPress();
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onHomePress: function () {
			this.getView().byId("home").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
			this.oRouter.navTo("Home");
		},
		onMyCarPress: function () {
			this.getView().byId("mycar").addStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
			this.oRouter.navTo("MyCars");
		},
		onProductPress: function () {
			this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
			// this.oRouter.navTo("Products");
		},
		onBookingsPress: function () {
			this.getView().byId("bookings").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
			this.oRouter.navTo("BookingScreen");
		},
		onMorePress: function () {
			this.getView().byId("more").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.oRouter.navTo("More");
		},
		onNotificationPress: function () {
			this.oRouter.navTo("Notifications");
		},
		onServiceStatusPress: function () {
			this.oRouter.navTo("ServiceStatus");
		},
		/*onProductPress: function () {
			this.oRouter.navTo("Products");
		},*/
		onPressConfirm: function () {
			this.oRouter.navTo("confirmAppointment");
		},
		onMyServicesPress: function () {
			this.oRouter.navTo("myservices");
		},
		onBookservicePress: function () {
			this.oRouter.navTo("BookingScreen");
		},
		/*onMyCarPress: function () {
			this.oRouter.navTo("MyCars");
		},*/
		onPressHome: function () {
			this.oRouter.navTo("Home");
		},
		onUserPress: function () {
			/*var that = this;
			if (!this.userDetails) {
				this.userDetails = sap.ui.xmlfragment("ggg","inc.demo.Toyota.fragment.User", this);
			}
			this.getView().addDependent(this.userDetails);*/
			// this.userDetails.open();
			// console.log("sarath");
			this.oRouter.navTo("myProfile");
		},
		onAddVehicle: function(){
			this.oRouter.navTo("Scan");
		}

	});

});