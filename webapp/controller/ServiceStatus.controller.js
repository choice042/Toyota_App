sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"sap/ui/core/UIComponent"
], function (BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.ServiceStatus", {

		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;*/
			var oRouter = this.getRouter();
			oRouter.getRoute("ServiceStatus");
			this.carouselScroll();

		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onCall: function () {
			sap.m.URLHelper.triggerTel("+91 8218975934");
		},
		onMapOpen: function () {
			if (!this.mapBox) {
				this.mapBox = sap.ui.xmlfragment("inc.demo.Toyota.fragment.MapDialog", this);
				this.getView().addDependent(this.mapBox);
			}
			this.mapBox.open();
			setTimeout(function () {

				this.loadMap(this, "googleMap", {});

			}.bind(this), 3000);

		},
		loadMap: function (that, domId, options) {
			options = {
				"lat": 25.5941,
				"lgn": 85.1376,
				"maptype": "ROADMAP",
				"zoom": "10"
			};
			var latlng = new google.maps.LatLng(options.lat, options.lgn);
			var that = this;
			var mapType;
			switch (options.maptype) {
			case "ROADMAP":
				mapType = google.maps.MapTypeId.ROADMAP
				break;
			case "SATELLITE":
				mapType = google.maps.MapTypeId.SATELLITE
				break;
			default:
				mapType = google.maps.MapTypeId.ROADMAP
			}
			var mapOptions = {
				center: latlng,
				zoom: options.zoom,
				mapTypeControl: false,
				zoomControl: false,
				// mapTypeId: mapType,
				// mapTypeControlOptions: {
				// 	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				// 	position: google.maps.ControlPosition.LEFT_BOTTOM
				// },
				streetViewControl: false,
				fullscreenControl: true
			};
			var domRef;
			if (this.getView().byId(domId)) {
				domRef = this.getView().byId(domId).getDomRef();
			} else {
				domRef = sap.ui.getCore().byId(domId).getDomRef();
			}
			var map = new google.maps.Map(domRef,
				mapOptions);
			this.addMarker(map);
			return map;

		},
		addMarker: function (map) {
			var locations = [{
				"lat": 24.5544,
				"lng": 39.7146,
				"id": 67
			}];
			var location;
			for (location in locations) {
				this.addMarkers(this, locations[location], "", map);
			}
		},
		addMarkers: function (that, oOptions, info, map) {
			if (oOptions.lat && oOptions.lng) {
				var location = {
					lat: oOptions.lat,
					lng: oOptions.lng
				};
				// Icon 
				var icon = {
					url: "./Images/GMarker.png", // url
					scaledSize: new google.maps.Size(25, 40), // scaled size
					origin: new google.maps.Point(0, 0), // origin
					anchor: new google.maps.Point(11, 37) // anchor
				};
				// Plot Marker In Map
				var oPosMarker = new google.maps.Marker({
					id: oOptions.id,
					position: location,
					title: oOptions.title,
					// animation: google.maps.Animation.BOUNCE,
					// title: 'You are here.',
					icon: icon,
					// zIndex	 : 10,
					map: map
				});

				oPosMarker.addListener('click', function (oDate) {

					for (var i = 0; i < that.CenterMarkers.length; i++) {
						// this.marker[0].setAnimation(google.maps.Animation.BOUNCE);
						that.CenterMarkers[i].setIcon({
							url: "./image/GMarker.png", // url
							scaledSize: new google.maps.Size(25, 40), // scaled size
							origin: new google.maps.Point(0, 0), // origin
							anchor: new google.maps.Point(11, 37) // anchor
						})
					}
					var oModel = that.getModel("oAppModel");
					oModel.setProperty("/Selcenter", oPosMarker.id);
					oModel.refresh();
					oPosMarker.setIcon({
							url: "./image/GMarker.png", // url
							scaledSize: new google.maps.Size(35, 50), // scaled size
							origin: new google.maps.Point(0, 0), // origin
							anchor: new google.maps.Point(15, 43) // anchor
						})
						// if (info.shipId) {
						// 	that.TrackShipment(oPosMarker);
						// }
				});
				// }
				var markers = [];
				markers.push(oPosMarker);

				// Set Bounds To Show All Marker Visible 
				if (!that._oCrtTripLatLngBounds) {
					that._oCrtTripLatLngBounds = new google.maps.LatLngBounds();
				}
				that._oCrtTripLatLngBounds.extend(new google.maps.LatLng(location.lat, location.lng));
				map.setCenter(that._oCrtTripLatLngBounds.getCenter());
				map.fitBounds(that._oCrtTripLatLngBounds);
				google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
					if (map.getZoom() > 15) {
						map.setZoom(14);
					}
					if (map.getZoom() < 2) {
						map.setZoom(4);
					}
				});
				return markers;
			}
		},
		onMapClose: function () {

			this.mapBox.close();
		},
		onClose: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var homebtn1 = true;
			var homebtn2 = false;
			oDataGlobalModel.setProperty("/homebtn1", homebtn1);
			oDataGlobalModel.setProperty("/homebtn2", homebtn2);
			var mycarbtn1 = true;
			var mycarbtn2 = false;
			oDataGlobalModel.setProperty("/mycarbtn1", mycarbtn1);
			oDataGlobalModel.setProperty("/mycarbtn2", mycarbtn2);
			var productbtn1 = true;
			var productbtn2 = false;
			oDataGlobalModel.setProperty("/productbtn1", productbtn1);
			oDataGlobalModel.setProperty("/productbtn2", productbtn2);
			var bookingbtn1 = false;
			var bookingbtn2 = true;
			oDataGlobalModel.setProperty("/bookingbtn1", bookingbtn1);
			oDataGlobalModel.setProperty("/bookingbtn2", bookingbtn2);
			var morebtn1 = true;
			var morebtn2 = false;
			oDataGlobalModel.setProperty("/morebtn1", morebtn1);
			oDataGlobalModel.setProperty("/morebtn2", morebtn2);
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
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.navTo("Home");
			/*this._oDialog.close();
			this._oDialog.destroy();
			this._oDialog = null;*/
		}

	});

});