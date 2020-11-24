sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter"

], function (Controller,formatter) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.BaseController", {
        formatter: formatter,
		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			/*var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
			this.oDataGlobalModel = oDataGlobalModel;
			// this.carouselScroll();

		},
		onLoadData: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			/*var logoutVisible = false;
			oDataGlobalModel.setProperty("/logoutVisible", logoutVisible);*/
			this.oDataGlobalModel = oDataGlobalModel;
			// this.carouselScroll();

		},
		carouselScroll: function () {
			var carousel = this.getView().byId("idcarousel");
			setTimeout(function () {
				carousel.next();
			}, 2000);
		}

	});
});