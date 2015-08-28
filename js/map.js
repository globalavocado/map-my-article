// Ethiopia
// var map = L.map('map').setView([9.644, 39.683], 6);

// Sudan and South Sudan
// var map = L.map('map').setView([13.832, 30.050], 5);

	//Indonesia
// var map = L.map('map').setView([-2.53, 120.43], 4);

map = new L.Map('map');

L.tileLayer('http://{s}.tiles.mapbox.com/v3/{your-MapboxID-goes-here}/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    })
  .addTo(map);

// comment this out if you want to use OpenStreetMap instead of signing up for MapBox
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

map.setView( new L.LatLng(0, 0), 2 );

L.geoJson( haiti, {
    style: function (feature) {
        return { opacity: 0.1, fillOpacity: 0.5, fillColor: "#FF7F50" };
    }
  })
  .addTo(map);
