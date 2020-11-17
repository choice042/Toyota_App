sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"inc/demo/Toyota/util/formatter",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (BaseController, formatter, MessageToast, History, UIComponent) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.More", {
		formatter: formatter,
		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;*/

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("More");
			this.onMorePress();
			var homebtn1 = true;
			var homebtn2 = false;
			oDataGlobalModel.setProperty("/homebtn1", homebtn1);
			oDataGlobalModel.setProperty("/homebtn2", homebtn2);
			var mycarbtn1 = true;
			var mycarbtn2 = false;
			oDataGlobalModel.setProperty("/mycarbtn1", mycarbtn1);
			oDataGlobalModel.setProperty("/mycarbtn2", mycarbtn2);
			var productbtn1 = true;
			var productbtn2 = false;
			oDataGlobalModel.setProperty("/productbtn1", productbtn1);
			oDataGlobalModel.setProperty("/productbtn2", productbtn2);
			var bookingbtn1 = true;
			var bookingbtn2 = false;
			oDataGlobalModel.setProperty("/bookingbtn1", bookingbtn1);
			oDataGlobalModel.setProperty("/bookingbtn2", bookingbtn2);
			var morebtn1 = false;
			var morebtn2 = true;
			oDataGlobalModel.setProperty("/morebtn1", morebtn1);
			oDataGlobalModel.setProperty("/morebtn2", morebtn2);
			this.carouselScroll();
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
			this.oRouter.navTo("Products");
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
			// this.oRouter.navTo("More");
		},
		// onNavBack: function () {
		// 	this.oRouter.navTo("Home");
		// 	var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
		// 	oDataGlobalModel.setProperty("/homebtn1", false);
		// 	oDataGlobalModel.setProperty("/homebtn2", true);
		// 	oDataGlobalModel.setProperty("/mycarbtn1", true);
		// 	oDataGlobalModel.setProperty("/mycarbtn2", false);
		// 	oDataGlobalModel.setProperty("/productbtn1", true);
		// 	oDataGlobalModel.setProperty("/productbtn2", false);
		// 	oDataGlobalModel.setProperty("/bookingbtn1", true);
		// 	oDataGlobalModel.setProperty("/bookingbtn2", false);
		// 	oDataGlobalModel.setProperty("/morebtn1", true);
		// 	oDataGlobalModel.setProperty("/morebtn2", false);
		// },
		onNavBack: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash === "Homeview") {
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
			} else if (sPreviousHash === "Productsview") {
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
			} else if (sPreviousHash === "MyCars") {
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
			} else if (sPreviousHash === "BookingScreen") {
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
			} else if (sPreviousHash === "More") {
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
			}
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
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
		onClose: function () {
			this.oRouter.navTo("Home");
		},
		onSafetyMaintanancePress: function () {
			this.getView().byId("More").setVisible(false);
			this.getView().byId("idsafety").setVisible(true);
		},
		onCloseSafety: function () {
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idsafety").setVisible(false);
		},
		onDefaultVehiclePress: function () {
			this.getView().byId("More").setVisible(false);
			this.getView().byId("idDefault").setVisible(true);
		},
		onCloseDefault: function () {
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		},
		onAfterSelectingVehicle: function (oEvent) {

			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();
			for (var i = 0; i <= 5; i++) {
				oDataGlobalModel.setProperty("/selectDefault/" + i + "/visible", false);
			}
			var data = oDataGlobalModel.getProperty(sPath);
			var newName = data.carName;
			var newImg = data.carImage;
			oDataGlobalModel.setProperty(sPath + "/visible", true);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarName", newName);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarimg", newImg);
			console.log(oDataGlobalModel);
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		},
		onAfterSelectingVehicle2: function (oEvent) {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*var spath = oEvent.getSource().getParent().getBindingContextPath();
			console.log(spath);*/
			var newName = "Supra 2020";
			var newImg = "Images/supraCar.png";
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarName", newName);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarimg", newImg);
			console.log(oDataGlobalModel);
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		}

	});
});