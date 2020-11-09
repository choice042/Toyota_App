sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter",
	"sap/ui/core/Fragment"
], function (Controller,formatter, Fragment) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Home", {
        formatter:formatter,
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Home");
			this.onHomePress();
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible",logoutVisible);
		},
		onHomePress: function () {
			this.getView().byId("home").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
		},
		onMyCarPress: function () {
			this.getView().byId("mycar").addStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
		},
		onProductPress: function () {
			this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
		},
		onBookingsPress: function () {
			this.getView().byId("bookings").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
		},
		onMorePress: function () {
			this.getView().byId("more").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
		},
		onNotificationPress: function () {
			this.oRouter.navTo("Notifications");
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
		onMyCarPress: function () {
			this.oRouter.navTo("MyCars");
		},
		onClose: function () {
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
		}

	});

});