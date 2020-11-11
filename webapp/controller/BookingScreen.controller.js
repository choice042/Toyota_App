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
			onPressScan: function(){
				this.oRouter.navTo("Scan");
		},
		onNavBack: function(){
			this.oRouter.navTo("Home");
		},
			onPressConfirm: function () {
			this.oRouter.navTo("confirmAppointment");
		}
		
	});
});