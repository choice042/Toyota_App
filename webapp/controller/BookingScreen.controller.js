sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"inc/demo/Toyota/util/formatter",
	"sap/m/MessageToast"
], function (Controller,formatter,MessageToast) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.BookingScreen", {
		formatter:formatter,
		onInit: function () {
             var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
             oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			 this.oDataGlobalModel = oDataGlobalModel;
			 
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            
		},
		onCarPress: function(oEvent){
			
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();
			var selectedObj = oEvent.getSource().getBindingContext("oDataGlobalModel").getObject();
			var carPath = sPath + "/carName";
			var selectedcar = oDataGlobalModel.getProperty(carPath);
			MessageToast.show(selectedcar);
			var carArray = oDataGlobalModel.getProperty("/carCategory");
			var len = carArray.length;
			for(var i=0; i<len; i++)
			{
				oDataGlobalModel.setProperty("/carCategory/" + i + "isSelected" , false);
			}
			
			oDataGlobalModel.setProperty(sPath + "isSelected" , true);
			
		},
		onNavBack: function(){
			this.oRouter.navTo("Home");
		}
	});
});