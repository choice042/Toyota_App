var _gmaps = (function () {
	var map;
	var markers = [];
	var directionsService;
	var directionsRenderer;
	var directionsDisplay;
	return {
		/*	
			Important:
			1) must call 'loadApi()' function in onInit() function so api file will load before map Initilize 
			2) must call 'init()' function in onAfterRendering() function 
			3) must use setTimeout for 'init()' method so it will load properlly
				Example:
					var that = this;
					setTimeout(function () {
						var oOptions = {
							"lat": -6.121435,
							"lgn": 106.774124,
							"maptype": "ROADMAP",
							"zoom": 8
						}
						_gmaps.init(that, "map_canvas", oOptions);
					}, 1000);
		*/

		/** 
		 * Function for initilize google API
		 * Please read my guide to know how to fix error ‘For development purposes only’ on google map visit given link:
		 * @see {@link http://plugins.g5plus.net/ere/knowledge-base/google-maps-shows-error-for-development-purposes-only/} - Google Maps is no longer free
		 * @param googleApi {String} - google Api URL
		 */
		loadApi: function (googleApi) {
			if (googleApi) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = googleApi;
				document.body.appendChild(script);
			}
		},

		/** 
		 * Function for initilize google map on view
		 * @param that {pointer} - this refrence of the controller
		 * @param domId {domElementID} - Document Element Id Where Map Will Load
		 * @param options {Object} - 
		 * Example:
		 *		oOptions = {
					"lat": -6.121435,
					"lgn": 106.774124,
					"maptype": "ROADMAP",
					"zoom": 8
				}
		 */
		loadMap: function (that, domId, options) {
			options = {
				"lat": 23.8338341,
				"lgn": 36.039571,
				"maptype": "ROADMAP",
				"zoom": 5
			};
			var latlng = new google.maps.LatLng(options.lat, options.lgn);
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
			if (that.getView().byId(domId)) {
				domRef = that.getView().byId(domId).getDomRef();
			} else {
				domRef = sap.ui.getCore().byId(domId).getDomRef();
			}
			map = new google.maps.Map(domRef,
				mapOptions);
			return map;
		},
		/** 
		 * Function to add a marker on map
		 * @param that {pointer} - This refrence of the controller
		 * @param oOptions {Object} - 
		 * Example : 
		 *		oOptions = {
						"lat": -6.121435,
						"lgn": 106.774124,
						"id": 123,
						"title": "Mumbai"
					};
		 * @returns {Array} - Gives array of marker objects ploted on the map 
		 */
		addMarker: function (that, oOptions, info) {
			if (oOptions.lat && oOptions.lng) {
				var location = {
					lat: oOptions.lat,
					lng: oOptions.lng
				};
				// Icon 
				var icon = {
					url: "./image/GMarker.png", // url
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

		/** 
		 * Function for remove marker from map
		 * @param that {pointer} - This refrence of the controller.
		 * @param oMarker {object} - Marker Object which return by 'addMarker' function.
		 * @see {@link addMarker} - object return by 'addMarker' function.
		 */
		removeMarker: function (that, oMarker) {

			if (oMarker instanceof google.maps.Marker) {
				oMarker.setMap(null);
			}
			markers = markers.filter(function (obj) {
				return obj.id !== oMarker.id;
			})

			if (!that._oCrtTripLatLngBounds) {
				that._oCrtTripLatLngBounds = new google.maps.LatLngBounds();
				map.fitBounds(that._oCrtTripLatLngBounds);
			}
			if (!that._oCrtTripLatLngBounds.isEmpty()) {
				map.setCenter(that._oCrtTripLatLngBounds.getCenter());
				map.fitBounds(that._oCrtTripLatLngBounds);
			}
			google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
				if (map.getZoom() > 15) {
					map.setZoom(14);
				}
				if (map.getZoom() < 2) {
					map.setZoom(4);
				}
			});

		},
		getMap: function () {
			return map;
		}

	};
})();