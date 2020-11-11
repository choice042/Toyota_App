sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.AddVehicle", {

	
		onInit: function () {
	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Scan");
		},
		onClose: function(){
			this.oRouter.navTo("Home");
		},
	
			onAddVehicle: function () {

			if (!this.showCAMERA) {
				this.showCAMERA = sap.ui.xmlfragment("inc.demo.Toyota.fragment.CameraCapture", this);
				this.getView().addDependent(this.showCAMERA);
			}
			this.showCAMERA.setEscapeHandler(function (oPromise) {
				oPromise.reject();
			});
			this.showCAMERA.open();
			this.startup();
		},

		startup: function () {
			// var oAppModel = this.getOwnerComponent().getModel("oAppModel");
		
			// oAppModel.refresh();
			var video = document.getElementById('video');
		
			navigator.mediaDevices.getUserMedia({
					video: true,
					audio: false
				})
				// on success, stream it in video tag
				.then(function (stream) {
					video.srcObject = stream;
					video.play();
				})
				.catch(function (err) {
					console.log("An error occurred: " + err);
				});

			video.addEventListener('canplay', function (ev) {
				if (!streaming) {
					height = video.videoHeight / (video.videoWidth / 40);

					// if (isNaN(height)) {
					//     height = width / (4 / 3);
					// }

					// video.setAttribute('width', 100);
					// video.setAttribute('height', 100);
					// canvas.setAttribute('width', width);
					// canvas.setAttribute('height', height);
					streaming = true;
				}
			}, false);
			// this.takepicture();
		},

		clearphoto: function () {
			var canvas = document.getElementById('canvas');
			var photo = this.byId("photo");
			var context = canvas.getContext('2d');
			context.fillStyle = "#AAA";
			context.fillRect(0, 0, canvas.width, canvas.height);

			var data = canvas.toDataURL('image/png');
			photo.setSrc(data);
				photoFragment.setSrc(data);
		},

		takepicture: function () {
			var that = this;
			// var oAppModel = this.getOwnerComponent().getModel("oAppModel");
			// oAppModel.setProperty("/oVisibleCameraButton", false);
			// oAppModel.setProperty("/oVisibleCameraVideo", false);
			// oAppModel.setProperty("/oVisibleCameraPhoto", true);
			// oAppModel.setProperty("/oVisibleCameraCanva", true);
			var video = document.getElementById('video');
			var canvas = document.getElementById('canvas');
			var photo = this.byId("photo");
			
			var context = canvas.getContext('2d');
			var value = true;
			if (value) {
				canvas.width = 800;
				canvas.height = 800;
				context.drawImage(video, 0, 0, 800, 800);

				var payloadString = canvas.toDataURL('image/png');
				console.log(payloadString);
				photo.setSrc(payloadString);
					// photoFragment.setSrc(payloadString);
					
				// oAppModel.setProperty("/oVisibleCameraCanva", false);
				var sUrl = "/Java_Service/alj/misc/ocr/getvin";
				// jQuery.ajax({
				// 	traditional: true,
				// 	type: "POST",
				// 	contentType: false,
				// 	url: sUrl,
				// 	data: payloadString,
				// 	async: false,
				// 	success: function (data, textStatus, jqXHR) {
				// 		console.log(data);
				// 		oAppModel.setProperty("/oEnteredVIN", data);

				// 	},
				// 	error: function (data) {
				// 		console.log(data);
				// 	}
				// });

				// oAppModel.setPoperty("/oEnteredVIN",newData);
				this.showCAMERA.close();
			} else {
				this.clearphoto();
			}
		},

		onCancelCamera: function () {
			this.showCAMERA.close();
			// var oAppModel = this.getOwnerComponent().getModel("oAppModel");
			// oAppModel.setProperty("/oVisibleCameraButton", true);
			// oAppModel.setProperty("/oVisibleCameraPhoto", false);
			// oAppModel.setProperty("/oVisibleCameraCanva", false);
		},

		onOKPress: function (payloadString) {

			this.showVIN.close();

		}

	
	});

});