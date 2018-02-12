function initMap() {
	var mapOptions = {
		zoom: 2,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		center: new google.maps.LatLng(20.5937, 78.9629),
		styles: [{
			"featureType": "landscape",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 65
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 51
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway",
			"stylers": [{
				"saturation": -100
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 30
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "road.local",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 40
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "transit",
			"stylers": [{
				"saturation": -100
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "administrative.province",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}, {
				"lightness": -25
			}, {
				"saturation": -100
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#ffff00"
			}, {
				"lightness": -25
			}, {
				"saturation": -97
			}]
		}]
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	function addMarker(opts) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(opts.coords.lat, opts.coords.long),
			map: map,
			title: 'Our Office!'
		});
	}
	addMarker({coords: {lat: 28.523425, long: 77.207843}});
	addMarker({coords: {lat: 30.328082, long: 78.045091}});
	addMarker({coords: {lat: -28.039177, long: 153.402726}});
}