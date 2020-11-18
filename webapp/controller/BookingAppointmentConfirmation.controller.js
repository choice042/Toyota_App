sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.BookingAppointmentConfirmation", {

		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("confirmAppointment");

		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		onClose: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", false);
			oDataGlobalModel.setProperty("/homebtn2", true);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.navTo("Home");
		},
		onCancelAppointmentPress: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("idCancelAppointmentFrag", "inc.demo.Toyota.fragment.CancelAppointment",
					this);
			}
			this.getView().addDependent(this._oDialog);
			this._oDialog.open();
		},
		onCancelAppointmentClose: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", false);
			oDataGlobalModel.setProperty("/homebtn2", true);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.navTo("Home");
			/*this._oDialog.close();
			this._oDialog.destroy();
			this._oDialog = null;*/
		},
		onReschedulePress: function () {
			if (!this._oDialog1) {
				this._oDialog1 = sap.ui.xmlfragment("idCancelAppointmentFrag", "inc.demo.Toyota.fragment.RescheduleAppointment",
					this);
			}
			this.getView().addDependent(this._oDialog1);
			this._oDialog1.open();
		},
		onCloseReschedule: function () {
			this._oDialog1.close();
			this._oDialog1.destroy();
			this._oDialog1 = null;
		},
		onCancelReschedule: function () {
			this._oDialog1.close();
			this._oDialog1.destroy();
			this._oDialog1 = null;
		}

	});

});