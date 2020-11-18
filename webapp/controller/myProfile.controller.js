sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast"
], function (BaseController, UIComponent, MessageToast) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.myProfile", {

		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var userData = {
				"userName": "Abhishek Jain",
				"password": "Abhishek123",
				"firstName": "Abhishek",
				"lastName": "Jain",
				"mobile": "7876653423",
				"mail": "abhishek.jain@incture.com",
				"nationalId": "4567"
			};
			oDataGlobalModel.setProperty("/userData", userData);
			this.carouselScroll();
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onLoginPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			console.log(oDataGlobalModel);
			/*this.getView().byId("idMyProfile").setVisible(true);
			this.getView().byId("idLogin").setVisible(false);
			var logoutVisible = true;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
			var data = oDataGlobalModel.getProperty("/userData");
			var username = data.userName;
			var password = data.password;
			if (username === "Abhishek Jain" && password === "Abhishek123") {
				this.getRouter().navTo("Home");
				this.getView().byId("idMyProfile").setVisible(true);
				this.getView().byId("idLogin").setVisible(false);
				var logoutVisible = true;
				oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);
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
				/*var hbox1Logout = $("div[id$='hbox1Logout']");
				sap.ui.getCore().byId(hbox1Logout).removeStyleClass("selectVehicleHboxLogoutClass");
				sap.ui.getCore().byId("btn1Logout").removeStyleClass("bookWithoutVehiclebtnLogoutClass");
				sap.ui.getCore().byId("hbox2Logout").removeStyleClass("selectVehicleHboxLogoutClass");
				sap.ui.getCore().byId("btn2Logout").removeStyleClass("bookWithoutVehiclebtnLogoutClass");*/
				var viewidhbox1 = oDataGlobalModel.getProperty("/viewidhbox1");
				viewidhbox1.removeStyleClass("selectVehicleHboxLogoutClass");
				var viewidbtn1 = oDataGlobalModel.getProperty("/viewidbtn1");
				viewidbtn1.removeStyleClass("bookWithoutVehiclebtnLogoutClass");
				var viewidhbox2 = oDataGlobalModel.getProperty("/viewidhbox2");
				viewidhbox2.removeStyleClass("selectVehicleHboxLogoutClass");
				var viewidbtn2 = oDataGlobalModel.getProperty("/viewidbtn2");
				viewidbtn2.removeStyleClass("bookWithoutVehiclebtnLogoutClass");
			} else {
				MessageToast.show("Invalid Credentials");
				$(".sapMMessageToast").addClass("sapMMessageToastLogin");
			}

		},
		onLogoutPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("idMyProfile").setVisible(false);
			this.getView().byId("idLogin").setVisible(true);
			this.getRouter().navTo("Home");
			var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);
			this.getRouter().navTo("Home");
		},
		OnSignUpPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("idMyProfile").setVisible(false);
			this.getView().byId("idLogin").setVisible(false);
			this.getView().byId("idSignup").setVisible(true);
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
			/*this.getRouter().navTo("Home");
			var logoutVisible = true;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
		},
		OnanotherLoginPress: function () {
			this.getView().byId("idMyProfile").setVisible(false);
			this.getView().byId("idLogin").setVisible(true);
			this.getView().byId("idSignup").setVisible(false);
		},
		onConfirmSignup: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("idMyProfile").setVisible(true);
			this.getView().byId("idLogin").setVisible(false);
			this.getView().byId("idSignup").setVisible(false);
			this.getRouter().navTo("Home");
			var logoutVisible = true;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);
		},
		EditProfilePress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("idEditProfile").setVisible(true);
			this.getView().byId("idMyProfile").setVisible(false);
			this.getView().byId("idLogin").setVisible(false);
			this.getView().byId("idSignup").setVisible(false);
			/*this.getRouter().navTo("Home");
			var logoutVisible = true;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
		},
		onConfirmEditPress: function () {
			this.getView().byId("idEditProfile").setVisible(false);
			this.getView().byId("idMyProfile").setVisible(true);
			this.getView().byId("idLogin").setVisible(false);
			this.getView().byId("idSignup").setVisible(false);
		},
		onCloseEditProfile: function () {
			this.getView().byId("idEditProfile").setVisible(false);
			this.getView().byId("idMyProfile").setVisible(true);
			this.getView().byId("idLogin").setVisible(false);
			this.getView().byId("idSignup").setVisible(false);
			this.getRouter().navTo("Home");
		},
		onClose: function () {
			this.getRouter().navTo("Home");
		}
	});

});