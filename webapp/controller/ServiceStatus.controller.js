sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("inc.demo.Toyota.controller.ServiceStatus", {

	
		onInit: function () {
				var oRouter = this.getRouter();
			oRouter.getRoute("ServiceStatus");

		},
			getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onCall: function(){
			sap.m.URLHelper.triggerTel("+91 8218975934");
		},
	onMapOpen:function(){
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
				"zoom": "4"
			};
			var latlng = new google.maps.LatLng(options.lat, options.lgn);
			var that=this;
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
				zoomControl:false,
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
		addMarker: function(map){
				var locations = [{
					"lat": 25.5941,
				"lng": 85.1376,
				"id":67
				},{
					"lat": 25.4182,
				"lng": 86.1272,
				"id":66
				},{
					"lat": 24.6961,
				"lng": 84.9870,
				"id":67
				},{
					"lat": 25.0173,
				"lng": 85.4162,
				"id":67
				}];
				var location;
				for(location in locations){
				this.addMarkers(this,locations[location],"",map);
				}
		},
			addMarkers: function (that, oOptions, info,map) {
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
					map:map
				});
				// if (info) {
				// var sTrackDiv;
				// // if (info.track) {
				// // 	sTrackDiv = '<div class="iw-title" width="100%"> <div with="50%">' + info.id + '</div>' +
				// // 		'<div with="50%"> <button id="TrackShip"> Track </button> </div> </div>';
				// // } else {
				// sTrackDiv = '<div class="iw-title">' + info.id + '</div>';
				// var shipIdiv;
				// if (info.shipId) {
				// 	shipIdiv = '<div class="iw-subTitle">Shipment Id - ' + info.shipId + '</div>';
				// } else {
				// 	shipIdiv = "";
				// }

				// if (!info.phone) {
				// 	info.phone = "NA";
				// }

				// if (!info.email) {
				// 	info.email = "NA";
				// }

				// // }
				// var contentString = '<div id="iw-container">' +
				// 	sTrackDiv +
				// 	// '<div class="iw-title">' + info.id + '</div>' +
				// 	'<div class="iw-content">' +
				// 	shipIdiv +
				// 	'<div class="iw-subTitle">Driver Details</div>' +
				// 	'<img src="./css/media/truck.png" alt="Image" height="115" width="115">' +
				// 	'<p class="podMapMarkerText"> Driver Name: ' + info.name + ' </p>' +
				// 	'<p class="podMapMarkerText"> Location: ' + info.location + '</p>' +
				// 	'<div class="iw-subTitle">Contacts</div>' +
				// 	'<p class="podMapMarkerText">' +
				// 	'Phone. ' + info.phone + '<br>e-mail: ' + info.email + '<br></p>' +
				// 	'</div>' +
				// 	'<div class="iw-bottom-gradient"></div>' +
				// 	'</div>';

				// var infowindow = new google.maps.InfoWindow({
				// 	content: contentString
				// });
				// oPosMarker.addListener('mouseover', function () {
				// 	// infowindow.open(map, oPosMarker);
				// });
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
				var markers=[];
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
		onMapClose:function(){
			// this.getView().byId("redCloseButton").addStyleClass("aljCloseRedButton");
			this.mapBox.close();
	},
	onClose: function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.oRouter.navTo("Home");
	}

	});

});