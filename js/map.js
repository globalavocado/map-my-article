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

      // A bounce easing method (from https://github.com/DmitryBaranovskiy/raphael).
      function bounce(t) {
        var s = 7.5625, p = 2.75, l;
        if (t < (1 / p)) {
          l = s * t * t;
        } else {
          if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
          } else {
            if (t < (2.5 / p)) {
              t -= (2.25 / p);
              l = s * t * t + 0.9375;
            } else {
              t -= (2.625 / p);
              l = s * t * t + 0.984375;
            }
          }
        }
        return l;
      }

            function onClick(id, callback) {
        document.getElementById(id).addEventListener('click', callback);
      };

      function flyToCountry(location, done) {
        var duration = 2000;
        var zoom = view.getZoom();
        var parts = 2;
        var called = false;
        function callback(complete) {
          --parts;
          if (called) {
            return;
          }
          if (parts === 0 || !complete) {
            called = true;
            done(complete);
          }
        }
        view.animate({
          center: location,
          duration: duration
        }, callback);
        view.animate({
          zoom: zoom - 1,
          duration: duration / 2
        }, {
          zoom: zoom,
          duration: duration / 2
        }, callback);
      }

        onClick('fly-to-country', function() {
          var countryIndex = $('#country').val();
          var lat = countryList[countryIndex].lat
          var lng = countryList[countryIndex].lng
          var searchcountry = ol.proj.fromLonLat([lng, lat]);
          flyToCountry(searchcountry, function() {});
        });
