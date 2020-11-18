sap.ui.define([
		"inc/demo/Toyota/controller/BaseController",
		"inc/demo/Toyota/util/formatter",
		"sap/ui/core/routing/History",
		"sap/ui/core/UIComponent",
		"sap/m/MessageToast"
	],
	function (BaseController, formatter, History, UIComponent, MessageToast) {

		"use strict";

		return BaseController.extend("inc.demo.Toyota.controller.BookingScreen", {
			formatter: formatter,
			onInit: function () {
				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				/*console.log(oDataGlobalModel);
				oDataGlobalModel.loadData("model/jsonFile.json", null, false);
				this.oDataGlobalModel = oDataGlobalModel;
				console.log(oDataGlobalModel);*/

				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				/*var logoutVisible = false;
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
				// console.log(oDataGlobalModel);
				this.carouselScroll();
				var visibility = oDataGlobalModel.getProperty("/logoutVisible");
				if (visibility === false) {
					this.getView().byId("vbox1logout").addStyleClass("selectVehicleVboxLogoutClass");
					this.getView().byId("hbox1Logout").addStyleClass("selectVehicleHboxLogoutClass");
					this.getView().byId("btn1Logout").addStyleClass("bookWithoutVehiclebtnLogoutClass");
					this.getView().byId("hbox2Logout").addStyleClass("selectVehicleHboxLogoutClass");
					this.getView().byId("btn2Logout").addStyleClass("bookWithoutVehiclebtnLogoutClass");
					// console.log("alj");
				} else {
					this.getView().byId("vbox1logout").removeStyleClass("selectVehicleVboxLogoutClass");
					this.getView().byId("hbox1Logout").removeStyleClass("selectVehicleHboxLogoutClass");
					this.getView().byId("btn1Logout").removeStyleClass("bookWithoutVehiclebtnLogoutClass");
					this.getView().byId("hbox2Logout").removeStyleClass("selectVehicleHboxLogoutClass");
					this.getView().byId("btn2Logout").removeStyleClass("bookWithoutVehiclebtnLogoutClass");
				}
				var viewidvbox1 = this.getView().byId("vbox1logout");
				oDataGlobalModel.setProperty("/viewidvbox1", viewidvbox1);
				var viewidhbox1 = this.getView().byId("hbox1Logout");
				oDataGlobalModel.setProperty("/viewidhbox1", viewidhbox1);
				var viewidbtn1 = this.getView().byId("btn1Logout");
				oDataGlobalModel.setProperty("/viewidbtn1", viewidbtn1);
				var viewidhbox2 = this.getView().byId("hbox2Logout");
				oDataGlobalModel.setProperty("/viewidhbox2", viewidhbox2);
				var viewidbtn2 = this.getView().byId("btn2Logout");
				oDataGlobalModel.setProperty("/viewidbtn2", viewidbtn2);

			},
			onCarPress: function (oEvent) {

				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();

				var carPath = sPath + "/carName";
				var selectedcar = oDataGlobalModel.getProperty(carPath);
				MessageToast.show(selectedcar);
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
			productArr: [],

			onProductTilePress: function (oEvent) {

				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();

				var productPath = sPath + "/productName";
				var selectedproduct = oDataGlobalModel.getProperty(productPath);
				MessageToast.show(selectedproduct);
				var flag = 1;
				// oDataGlobalModel.setProperty("/currentProduct", selectedproduct);
				// oDataGlobalModel.setProperty("/currentProdPath", sPath);

				// this.productArr.push(selectedproduct);
				// oDataGlobalModel.setProperty("/selectedProducts", this.productArr);

				// var productArray = oDataGlobalModel.getProperty("/productCategory");
				var len = this.productArr.length;
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						if (this.productArr[i] === selectedproduct) {
							var k = i;
							flag = 0;
							break;
							// this.productArr.splice(i,1);
						} else {
							flag = 1;
						}
					}

					if (flag === 0) {
						oDataGlobalModel.setProperty(sPath + "/isSelected", false);
						this.productArr.splice(k, 1);
						oDataGlobalModel.setProperty("/selectedProducts", this.productArr);
					} else {
						this.productArr.push(selectedproduct);
						oDataGlobalModel.setProperty("/selectedProducts", this.productArr);
						oDataGlobalModel.setProperty(sPath + "/isSelected", true);
					}

				} else {
					this.productArr.push(selectedproduct);
					oDataGlobalModel.setProperty("/selectedProducts", this.productArr);
					oDataGlobalModel.setProperty(sPath + "/isSelected", true);
				}

				// oDataGlobalModel.setProperty(sPath + "/isSelected", true);
				console.log(oDataGlobalModel);

			},

			fnProductValidate: function () {
				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
				var currentPath = oDataGlobalModel.getProperty("/currentProdPath");
				var currentProduct = oDataGlobalModel.getProperty("/currentProduct");
				var productArraySelected = oDataGlobalModel.getProperty("/selectedProducts");
				var len = productArraySelected.length;
				var notProductArr = [];
				for (var i = 0; i < len; i++) {
					if (productArraySelected[i] === currentProduct) {
						// oDataGlobalModel.setProperty(sPath + "/isSelected", false);
						notProductArr.push(i);

					}
				}
				return notProductArr;
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
			onPressScan: function () {
				this.oRouter.navTo("Scan");
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
				/*<< << << < HEAD
					=== === =*/
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
				} else
				if (sPreviousHash === "Productsview") {
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
			onPressConfirm: function () {
				this.oRouter.navTo("confirmAppointment");
			},
			onBookWithoutVehicleBtnPress: function () {
				this.getView().byId("btn1Logout").addStyleClass("bookWithoutVehicleRedBtn");
				// this.getView().byId("btn2Logout").removeStyleClass("bookWithoutProductRedBtn");
				MessageToast.show("Book Without Vehicle");
				$(".sapMMessageToast").addClass("sapMMessageToastForBtn");
			},
			onBookWithoutProductBtnPress: function () {
				this.getView().byId("btn2Logout").addStyleClass("bookWithoutProductRedBtn");
				// this.getView().byId("btn1Logout").removeStyleClass("bookWithoutVehicleRedBtn");
				MessageToast.show("Book Without Product");
				$(".sapMMessageToast").addClass("sapMMessageToastForBtn");
			}

		});
	});