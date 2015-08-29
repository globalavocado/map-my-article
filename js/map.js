var source = new ol.source.Vector({
  url: 'js/haiti.geojson',
  format: new ol.format.GeoJSON()
});
var style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1
  })
});
var vectorLayer = new ol.layer.Vector({
  source: source,
  style: style
});
var view = new ol.View({
  center: [0, 0],
  zoom: 2
});
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  view: view
});

// function of button

var zoomtocountry = document.getElementById('zoomtocountry');
zoomtocountry.addEventListener('click', function() {
  var feature = source.getFeatures()[0];
  var polygon = /** @type {ol.geom.SimpleGeometry} */ (feature.getGeometry());
  var size = /** @type {ol.Size} */ (map.getSize());
  view.fit(
      polygon,
      size,
      {
        padding: [170, 50, 30, 150]
      }
  );
}, false);
