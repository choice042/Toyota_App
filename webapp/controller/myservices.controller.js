sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"sap/ui/core/UIComponent"
], function (BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.myservices", {

		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.onOngoingPress();
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onClose: function () {
			this.getRouter().navTo("Home");
		},
		onOngoingPress: function (oEvent) {

			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			// var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();
			// console.log(sPath); 
			console.log(oDataGlobalModel);
			console.log(oEvent);

			this.getView().byId("ongoing").addStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnClick");
			var newBtnImg = "Images/camryCar.png";
			var newBtnDate = "30 May 2020, 09:00 AM - 10:00 AM";
			oDataGlobalModel.setProperty("/myserviceImg", newBtnImg);
			oDataGlobalModel.setProperty("/myservicesDate", newBtnDate);

		},
		onPastPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnClick");
			var newBtnImg = "Images/supraCar.png";
			var newBtnDate = "08 SEP 2019, 11:00 AM - 12:00 PM";
			oDataGlobalModel.setProperty("/myserviceImg", newBtnImg);
			oDataGlobalModel.setProperty("/myservicesDate", newBtnDate);
		},
		onUpcomingPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnClick");
			var newBtnImg = "Images/camryCar.png";
			var newBtnDate = "08 DEC 2020, 11:00 AM - 12:00 PM";
			oDataGlobalModel.setProperty("/myserviceImg", newBtnImg);
			oDataGlobalModel.setProperty("/myservicesDate", newBtnDate);
			// console.log("sample");
		},
		onPressKnowMore: function () {
			this.getRouter().navTo("ServiceStatus");
		}

	});

});