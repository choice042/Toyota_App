sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.myservices", {

		onInit: function () {
			this.onOngoingPress();
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onClose: function () {
			this.getRouter().navTo("Home");
		},
		onOngoingPress: function () {
			this.getView().byId("ongoing").addStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnClick");
		},
		onPastPress: function () {
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnClick");
		},
		onUpcomingPress: function () {
			this.getView().byId("ongoing").removeStyleClass("myservicesBtnClick");
			this.getView().byId("past").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("upcoming").removeStyleClass("myservicesBtnnotClick");
			this.getView().byId("ongoing").addStyleClass("myservicesBtnnotClick");
			this.getView().byId("past").removeStyleClass("myservicesBtnClick");
			this.getView().byId("upcoming").addStyleClass("myservicesBtnClick");
			// console.log("sample");
		},
		onPressKnowMore: function(){
			this.getRouter().navTo("ServiceStatus");
		}

	});

});