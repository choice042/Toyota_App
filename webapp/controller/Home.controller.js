sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter",
	"sap/ui/core/Fragment"
], function (Controller, formatter, Fragment) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.Home", {
		formatter: formatter,
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Home");
			this.onHomePress();
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);
			this.carouselScroll();
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
			this.oRouter.navTo("MyCars");
		},
		onProductPress: function () {
			this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");
			this.oRouter.navTo("Products");
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
		/*	onProductPress: function () {
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
		/*onBookingsPress: function () {
			this.oRouter.navTo("BookingScreen");
			// console.log("sample");
		},
		onMyCarPress: function () {
			this.oRouter.navTo("MyCars");
		},*/
		onClose: function () {
			this.oRouter.navTo("Home");
		},
		/*	onMorePress2: function () {
				this.oRouter.navTo("More");
			},*/
		onUserPress: function () {
			this.oRouter.navTo("myProfile");
		},
		carouselScroll: function () {
			var carousel = this.getView().byId("idcarousel");
			setTimeout(function () {
				carousel.next();
			}, 1500);
		}

	});

});