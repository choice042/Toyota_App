sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.myProfile", {

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
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onLoginPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
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