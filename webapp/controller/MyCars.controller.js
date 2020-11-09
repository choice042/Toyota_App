sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter"
], function (Controller,formatter) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.MyCars", {

		formatter: formatter,
		onInit: function () {
			 var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
             oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			 this.oDataGlobalModel = oDataGlobalModel;
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function () {
				this.oRouter.navTo("Home");
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf inc.demo.Toyota.view.MyCars
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf inc.demo.Toyota.view.MyCars
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf inc.demo.Toyota.view.MyCars
		 */
		//	onExit: function() {
		//
		//	}

	});

});