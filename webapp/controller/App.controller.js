sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.App", {
		onInit: function () {
	this.loadApi(

				// AIzaSyAM-B0tgFUNlDKPBppg8cX7i6TWYJEAy8A
				"https://maps.googleapis.com/maps/api/js?key=AIzaSyAM-B0tgFUNlDKPBppg8cX7i6TWYJEAy8A&libraries=places&v=weekly");
		},
			loadApi: function (googleApi) {
			if (googleApi) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = googleApi;
				document.body.appendChild(script);
			}
		},
	});
});