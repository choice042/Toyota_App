sap.ui.require("sap.m.VBox");
sap.ui.define([
		'sap/m/VBox'
	],
	function (
		VB
	) {
		"use strict";
		var VBox = VB.extend("com.sample.custom.control.VBox", {
			metadata: {
				properties: {

				},
				events: {
					"press": {}
				}
			},

			renderer: {}
		});
		VBox.prototype.onclick = function (ovt) {
			this.firePress();
		};

		return VBox;
	});