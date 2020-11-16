sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
	
], function (Controller) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.BaseController", {
		
		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;

		}

	});
});