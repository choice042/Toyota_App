sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (BaseController, UIComponent, History) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.Products", {

		onInit: function () {
			this.oRouter = this.getRouter();
			this.oRouter.getRoute("Products");
				
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;*/
				oDataGlobalModel.setProperty("/afterProductCatalog","General Job");
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
			this.carouselScroll();
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
		onAddVehicle: function () {
			this.oRouter.navTo("Scan");
		},
		onPressProductDetail: function () {
			this.oRouter.navTo("productDetail");
		},
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
				oRouter.navTo("Home", {}, true);
			}
		},
		// onCarPress: function (oEvent) {
		// 	// var context= oEvent.getSource();
		// 	// console.log(context);
		// 	oEvent.removeStyleClass("carBox3");
		// 	oEvent.addStyleClass("carBox6");
		// }, 
		onCarPress: function (oEvent) {

				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();
				oDataGlobalModel.setProperty("/afterProductCatalog",oDataGlobalModel.getProperty(sPath+"/catalog"));
				
				var carPath = sPath + "/carName";
				var selectedcar = oDataGlobalModel.getProperty(carPath);
				// MessageToast.show(selectedcar);
				oDataGlobalModel.setProperty("/currentVehicle", selectedcar);
				var carArray = oDataGlobalModel.getProperty("/carCategory");
				var len = carArray.length;
				for (var i = 0; i < len; i++) {
					oDataGlobalModel.setProperty("/carCategory/" + i + "/isSelected", false);
				}

				oDataGlobalModel.setProperty(sPath + "/isSelected", true);

				/*oDataGlobalModel.setProperty(sPath + "isSelected", true);
				console.log(oDataGlobalModel); >>> >>> > refs / heads / master*/
			},
			onVehicleChange: function(){
				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				var newOne =oDataGlobalModel.getProperty("/currentVehicle");
				var carCategory=oDataGlobalModel.getProperty("/carCategory");
				var i;
				for(i=0;i<carCategory.length;i++){
					if(carCategory[i].carName===newOne)
					{
						oDataGlobalModel.setProperty("/currentStatusVehicle",oDataGlobalModel.getProperty("/carCategory/"+i+"/serviceStatus/ongoing/status"));
					}
				}
				var j;
					var currentStatusVehicle=oDataGlobalModel.getProperty("/currentStatusVehicle");
						var serviceStatusBindings=oDataGlobalModel.getProperty("/serviceStatusBindings");
				for(j=0;j<serviceStatusBindings.length;j++){
						if(serviceStatusBindings[j].statusval ===currentStatusVehicle){
								oDataGlobalModel.setProperty("/serviceStatusView",oDataGlobalModel.getProperty("/serviceStatusBindings/"+j));
						}
				}
		}

	});

});