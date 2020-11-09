sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.myProfile", {

		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onLoginPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("idMyProfile").setVisible(true);
			this.getView().byId("idLogin").setVisible(false);
			this.getRouter().navTo("Home");
			var logoutVisible = true;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);

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