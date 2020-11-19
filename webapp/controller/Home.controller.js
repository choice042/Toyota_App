sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"inc/demo/Toyota/util/formatter",
	"sap/ui/core/Fragment"
], function (BaseController, formatter, Fragment) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.Home", {
		formatter: formatter,
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Home");
			this.onHomePress();
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.onLoadData();
			/*oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
			var homebtn1 = false;
			var homebtn2 = true;
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
			var morebtn1 = true;
			var morebtn2 = false;
			oDataGlobalModel.setProperty("/morebtn1", morebtn1);
			oDataGlobalModel.setProperty("/morebtn2", morebtn2);
			console.log(oDataGlobalModel);
			this.carouselScroll();
			this.onVehicleChange();
		},
		loginWarningFragmentOpen: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
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
			// this.loginWarningFragmentOpen();
			// console.log("ALJ");
			/*this.getView().byId("home").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
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
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
			/*this.getView().byId("mycar").addStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			else {
				this.oRouter.navTo("MyCars");
			}
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
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
			/*this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			else {
				this.oRouter.navTo("Products");
			}
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
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
			/*this.getView().byId("bookings").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			else {
				this.oRouter.navTo("BookingScreen");
			}
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
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
			/*this.getView().byId("more").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");*/
			else {
				this.oRouter.navTo("More");
			}
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

		onMyServicesPress: function () {
			this.oRouter.navTo("myservices");
		},
		onBookservicePress: function () {
			/*var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var visibility = oDataGlobalModel.getProperty("/logoutVisible");
			if (visibility === false) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("idEditProfileFrag", "inc.demo.Toyota.fragment.loginWarning",
						this);
				}
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			} else {
				this.oRouter.navTo("BookingScreen");
			}*/
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
		/*carouselScroll: function () {
			var carousel = this.getView().byId("idcarousel");
			setTimeout(function () {
				carousel.next();
			}, 1500);
		},*/
		onCancel: function () {
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
			this._oDialog.close();
			this._oDialog.destroy();
			this._oDialog = null;
		},
		onContinue: function () {
			this.oRouter.navTo("myProfile");
		},
			onVehicleChange: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var newOne = oDataGlobalModel.getProperty("/currentVehicle");
			var carCategory = oDataGlobalModel.getProperty("/carCategory");
			var i;
			for (i = 0; i < carCategory.length; i++) {
				if (carCategory[i].carName === newOne) {
					oDataGlobalModel.setProperty("/currentStatusVehicle", oDataGlobalModel.getProperty("/carCategory/" + i +
						"/serviceStatus/ongoing/status"));
				}
			}
			var j;
			var currentStatusVehicle = oDataGlobalModel.getProperty("/currentStatusVehicle");
			var serviceStatusBindings = oDataGlobalModel.getProperty("/serviceStatusBindings");
			for (j = 0; j < serviceStatusBindings.length; j++) {
				if (serviceStatusBindings[j].statusval === currentStatusVehicle) {
					oDataGlobalModel.setProperty("/serviceStatusView", oDataGlobalModel.getProperty("/serviceStatusBindings/" + j));
				}
			}
		}

	});

});