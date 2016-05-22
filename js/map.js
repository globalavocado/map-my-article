      var searchcountry = ol.proj.fromLonLat([-72, 19.5]);
      var europe = ol.proj.fromLonLat([2.5, 51.9]);
      
      var view = new ol.View({
        // the view's initial state
        center: europe,
        zoom: 6
      });

      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            preload: 4,
            source: new ol.source.OSM()
          })
        ],
        // Improve user experience by loading tiles while animating. Will make
        // animations stutter on mobile or slow devices.
        loadTilesWhileAnimating: true,
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }),
        view: view
      });

      var flyToCountry = document.getElementById('fly-to-country');
      flyToCountry.addEventListener('click', function() {
        var duration = 2000;
        var start = +new Date();
        var pan = ol.animation.pan({
          duration: duration,
          source: /** @type {ol.Coordinate} */ (view.getCenter()),
          start: start
        });
        var bounce = ol.animation.bounce({
          duration: duration,
          resolution: 4 * view.getResolution(),
          start: start
        });
        map.beforeRender(pan, bounce);
        view.setCenter(searchcountry);
      }, false);