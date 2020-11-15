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
			var homebtn1 = true;
			var homebtn2 = false;
			oDataGlobalModel.setProperty("/homebtn1", homebtn1);
			oDataGlobalModel.setProperty("/homebtn2", homebtn2);
			var mycarbtn1 = true;
			var mycarbtn2 = false;
			oDataGlobalModel.setProperty("/mycarbtn1", mycarbtn1);
			oDataGlobalModel.setProperty("/mycarbtn2", mycarbtn2);
			var productbtn1 = false;
			var productbtn2 = true;
			oDataGlobalModel.setProperty("/productbtn1", productbtn1);
			oDataGlobalModel.setProperty("/productbtn2", productbtn2);
			var bookingbtn1 = true;
			var bookingbtn2 = false;
			oDataGlobalModel.setProperty("/bookingbtn1", bookingbtn1);
			oDataGlobalModel.setProperty("/bookingbtn2", bookingbtn2);
			var morebtn1 = true;
			var morebtn2 = false;
			oDataGlobalModel.setProperty("/morebtn1", morebtn1);
			oDataGlobalModel.setProperty("/morebtn2", morebtn2);
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onHomePress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", false);
			oDataGlobalModel.setProperty("/homebtn2", true);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("home").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("Home");
		},
		onMyCarPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", false);
			oDataGlobalModel.setProperty("/mycarbtn2", true);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("mycar").addStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("MyCars");
		},
		onProductPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", false);
			oDataGlobalModel.setProperty("/productbtn2", true);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			// this.oRouter.navTo("Products");
		},
		onBookingsPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", false);
			oDataGlobalModel.setProperty("/bookingbtn2", true);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("bookings").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("BookingScreen");
		},
		onMorePress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", false);
			oDataGlobalModel.setProperty("/morebtn2", true);
			/*this.getView().byId("more").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");*/
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
		},
		onPressProductDetail: function(){
			this.oRouter.navTo("productDetail");
		},
		onNavBack: function(){
			this.oRouter.navTo("Home");
		},
		onCarPress: function(oEvent){
			// var context= oEvent.getSource();
			// console.log(context);
			oEvent.removeStyleClass("carBox3");
			oEvent.addStyleClass("carBox6");
		}

	});

});