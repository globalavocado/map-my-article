	// create a map in the "map" div, set the view to a given place and zoom
	// Ethiopia
var map = L.map('map').setView([9.644, 39.683], 6);

	//Indonesia
// var map = L.map('map').setView([-2.53, 120.43], 4);

// add an MapBox tile layer
L.tileLayer('http://{s}.tiles.mapbox.com/v3/{your-MapboxID-goes-here}/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

// comment this out if you want to use OpenStreetMap instead of signing up for MapBox
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
// Ethiopia marker
// L.marker([9.644, 39.683]).addTo(map)

// Indonesia marker
// L.marker([-6.124, 106.48]).addTo(map)
//     .bindPopup($('#country').val())
