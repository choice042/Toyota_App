sap.ui.define([
	"inc/demo/Toyota/controller/BaseController",
	"inc/demo/Toyota/util/formatter",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (BaseController, formatter, MessageToast, History, UIComponent) {
	"use strict";

	return BaseController.extend("inc.demo.Toyota.controller.More", {
		formatter: formatter,
		onInit: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*oDataGlobalModel.loadData("model/jsonFile.json", null, false);
			this.oDataGlobalModel = oDataGlobalModel;*/

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("More");
			this.onMorePress();
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
			var bookingbtn1 = true;
			var bookingbtn2 = false;
			oDataGlobalModel.setProperty("/bookingbtn1", bookingbtn1);
			oDataGlobalModel.setProperty("/bookingbtn2", bookingbtn2);
			var morebtn1 = false;
			var morebtn2 = true;
			oDataGlobalModel.setProperty("/morebtn1", morebtn1);
			oDataGlobalModel.setProperty("/morebtn2", morebtn2);
			// this.carouselScroll();
		},
		onHomePress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", false);
			oDataGlobalModel.setProperty("/homebtn2", true);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("home").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("Home");
		},
		onMyCarPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", false);
			oDataGlobalModel.setProperty("/mycarbtn2", true);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("mycar").addStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("MyCars");
		},
		onProductPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", false);
			oDataGlobalModel.setProperty("/productbtn2", true);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("products").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("Products");
		},
		onBookingsPress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", false);
			oDataGlobalModel.setProperty("/bookingbtn2", true);
			oDataGlobalModel.setProperty("/morebtn1", true);
			oDataGlobalModel.setProperty("/morebtn2", false);
			/*this.getView().byId("bookings").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");
			this.getView().byId("more").removeStyleClass("redFooter");*/
			this.oRouter.navTo("BookingScreen");
		},
		onMorePress: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			oDataGlobalModel.setProperty("/homebtn1", true);
			oDataGlobalModel.setProperty("/homebtn2", false);
			oDataGlobalModel.setProperty("/mycarbtn1", true);
			oDataGlobalModel.setProperty("/mycarbtn2", false);
			oDataGlobalModel.setProperty("/productbtn1", true);
			oDataGlobalModel.setProperty("/productbtn2", false);
			oDataGlobalModel.setProperty("/bookingbtn1", true);
			oDataGlobalModel.setProperty("/bookingbtn2", false);
			oDataGlobalModel.setProperty("/morebtn1", false);
			oDataGlobalModel.setProperty("/morebtn2", true);
			/*this.getView().byId("more").addStyleClass("redFooter");
			this.getView().byId("mycar").removeStyleClass("redFooter");
			this.getView().byId("products").removeStyleClass("redFooter");
			this.getView().byId("bookings").removeStyleClass("redFooter");
			this.getView().byId("home").removeStyleClass("redFooter");*/
			// this.oRouter.navTo("More");
		},
		// onNavBack: function () {
		// 	this.oRouter.navTo("Home");
		// 	var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
		// 	oDataGlobalModel.setProperty("/homebtn1", false);
		// 	oDataGlobalModel.setProperty("/homebtn2", true);
		// 	oDataGlobalModel.setProperty("/mycarbtn1", true);
		// 	oDataGlobalModel.setProperty("/mycarbtn2", false);
		// 	oDataGlobalModel.setProperty("/productbtn1", true);
		// 	oDataGlobalModel.setProperty("/productbtn2", false);
		// 	oDataGlobalModel.setProperty("/bookingbtn1", true);
		// 	oDataGlobalModel.setProperty("/bookingbtn2", false);
		// 	oDataGlobalModel.setProperty("/morebtn1", true);
		// 	oDataGlobalModel.setProperty("/morebtn2", false);
		// },
		onNavBack: function () {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash === "Homeview") {
				oDataGlobalModel.setProperty("/homebtn1", false);
				oDataGlobalModel.setProperty("/homebtn2", true);
				oDataGlobalModel.setProperty("/mycarbtn1", true);
				oDataGlobalModel.setProperty("/mycarbtn2", false);
				oDataGlobalModel.setProperty("/productbtn1", true);
				oDataGlobalModel.setProperty("/productbtn2", false);
				oDataGlobalModel.setProperty("/bookingbtn1", true);
				oDataGlobalModel.setProperty("/bookingbtn2", false);
				oDataGlobalModel.setProperty("/morebtn1", true);
				oDataGlobalModel.setProperty("/morebtn2", false);
			} else if (sPreviousHash === "Productsview") {
				oDataGlobalModel.setProperty("/homebtn1", true);
				oDataGlobalModel.setProperty("/homebtn2", false);
				oDataGlobalModel.setProperty("/mycarbtn1", true);
				oDataGlobalModel.setProperty("/mycarbtn2", false);
				oDataGlobalModel.setProperty("/productbtn1", false);
				oDataGlobalModel.setProperty("/productbtn2", true);
				oDataGlobalModel.setProperty("/bookingbtn1", true);
				oDataGlobalModel.setProperty("/bookingbtn2", false);
				oDataGlobalModel.setProperty("/morebtn1", true);
				oDataGlobalModel.setProperty("/morebtn2", false);
			} else if (sPreviousHash === "MyCars") {
				oDataGlobalModel.setProperty("/homebtn1", true);
				oDataGlobalModel.setProperty("/homebtn2", false);
				oDataGlobalModel.setProperty("/mycarbtn1", false);
				oDataGlobalModel.setProperty("/mycarbtn2", true);
				oDataGlobalModel.setProperty("/productbtn1", true);
				oDataGlobalModel.setProperty("/productbtn2", false);
				oDataGlobalModel.setProperty("/bookingbtn1", true);
				oDataGlobalModel.setProperty("/bookingbtn2", false);
				oDataGlobalModel.setProperty("/morebtn1", true);
				oDataGlobalModel.setProperty("/morebtn2", false);
			} else if (sPreviousHash === "BookingScreen") {
				oDataGlobalModel.setProperty("/homebtn1", true);
				oDataGlobalModel.setProperty("/homebtn2", false);
				oDataGlobalModel.setProperty("/mycarbtn1", true);
				oDataGlobalModel.setProperty("/mycarbtn2", false);
				oDataGlobalModel.setProperty("/productbtn1", true);
				oDataGlobalModel.setProperty("/productbtn2", false);
				oDataGlobalModel.setProperty("/bookingbtn1", false);
				oDataGlobalModel.setProperty("/bookingbtn2", true);
				oDataGlobalModel.setProperty("/morebtn1", true);
				oDataGlobalModel.setProperty("/morebtn2", false);
			} else if (sPreviousHash === "More") {
				oDataGlobalModel.setProperty("/homebtn1", true);
				oDataGlobalModel.setProperty("/homebtn2", false);
				oDataGlobalModel.setProperty("/mycarbtn1", true);
				oDataGlobalModel.setProperty("/mycarbtn2", false);
				oDataGlobalModel.setProperty("/productbtn1", true);
				oDataGlobalModel.setProperty("/productbtn2", false);
				oDataGlobalModel.setProperty("/bookingbtn1", true);
				oDataGlobalModel.setProperty("/bookingbtn2", false);
				oDataGlobalModel.setProperty("/morebtn1", false);
				oDataGlobalModel.setProperty("/morebtn2", true);
			}
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("Home", {}, true);
			}
		},
		onNotificationPress: function () {
			this.oRouter.navTo("Notifications");
		},
		onServiceStatusPress: function () {
			this.oRouter.navTo("ServiceStatus");
		},
		/*onProductPress: function () {
			this.oRouter.navTo("Products");
		},*/
		onPressConfirm: function () {
			this.oRouter.navTo("confirmAppointment");
		},
		onMyServicesPress: function () {
			this.oRouter.navTo("myservices");
		},
		onBookservicePress: function () {
			this.oRouter.navTo("BookingScreen");
		},
		/*onMyCarPress: function () {
			this.oRouter.navTo("MyCars");
		},*/
		onClose: function () {
			this.oRouter.navTo("Home");
		},
		onSafetyMaintanancePress: function () {
			this.getView().byId("More").setVisible(false);
			this.getView().byId("idsafety").setVisible(true);
		},
		onCloseSafety: function () {
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idsafety").setVisible(false);
		},
		onDefaultVehiclePress: function () {
			this.getView().byId("More").setVisible(false);
			this.getView().byId("idDefault").setVisible(true);
		},
		onCloseDefault: function () {
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		},
		onAfterSelectingVehicle: function (oEvent) {

			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			var sPath = oEvent.getSource().getBindingContext("oDataGlobalModel").getPath();
			for (var i = 0; i <= 5; i++) {
				oDataGlobalModel.setProperty("/selectDefault/" + i + "/visible", false);
			}
			var data = oDataGlobalModel.getProperty(sPath);
			var newName = data.carName;
			var newImg = data.carImage;
			oDataGlobalModel.setProperty(sPath + "/visible", true);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarName", newName);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarimg", newImg);
			console.log(oDataGlobalModel);
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		},
		onAfterSelectingVehicle2: function (oEvent) {
			var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			/*var spath = oEvent.getSource().getParent().getBindingContextPath();
			console.log(spath);*/
			var newName = "Supra 2020";
			var newImg = "Images/supraCar.png";
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarName", newName);
			oDataGlobalModel.setProperty("/selectDefaultVehiclecarimg", newImg);
			console.log(oDataGlobalModel);
			this.getView().byId("More").setVisible(true);
			this.getView().byId("idDefault").setVisible(false);
		},
		onMapOpen: function () {
			if (!this.mapBox) {
				this.mapBox = sap.ui.xmlfragment("inc.demo.Toyota.fragment.DefaultServiceCentre", this);
				this.getView().addDependent(this.mapBox);
			}
			this.mapBox.open();
			setTimeout(function () {

				this.loadMap(this, "googleMap2", {});

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
				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
		var locationCurrent=oDataGlobalModel.getProperty("/locationCurrent");
		if(locationCurrent==="jeddah"){
			var locations = [{
				"lat": 21.4858,
				"lng": 39.1925,
				"id": 67
			}];
		}
		else 	if(locationCurrent==="Medina"){
			var locations = [{
				"lat": 24.5247,
				"lng": 39.5692,
				"id": 68
			}];
		}
		else 	if(locationCurrent==="Airport"||locationCurrent==""||locationCurrent==undefined){
			var locations = [{
				"lat": 21.6677,
				"lng": 39.1737,
				"id": 69
			}];
		}
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
							url: "./Image/GMarker.png", // url
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
			onRelocate: function(oEvent){
			console.log(oEvent);
			var	value = oEvent.getSource().getValue();
				var oDataGlobalModel = this.getOwnerComponent().getModel("oDataGlobalModel");
			
			if(value==="jeddah"){
					oDataGlobalModel.setProperty("/locationCurrent",value);
				
			}
			if(value==="Medina"){
					oDataGlobalModel.setProperty("/locationCurrent",value);
			}
			if(value==="Airport"){
					oDataGlobalModel.setProperty("/locationCurrent",value);
			}
		// 		"mecca":{"lat":"21.3891","long":"39.8579"},
		// "medina":{"lat":"24.5247","long":"39.5692"},
		// "airport":{"lat":24.5544,"long":"39.7146"}
			this.onMapClose();
			this.onMapOpen();
		}

	});
});