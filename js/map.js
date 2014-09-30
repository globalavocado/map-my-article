	// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([9.644, 39.683], 5);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([9.644, 39.683]).addTo(map)
//     .bindPopup($('#country').val())
