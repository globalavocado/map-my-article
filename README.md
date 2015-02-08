[![Code Climate](https://codeclimate.com/github/globalavocado/map-my-article/badges/gpa.svg)](https://codeclimate.com/github/globalavocado/map-my-article)

<h1>Map My Article</h1>

This web app does a fuzzy search on the <a href="http://www.isi-web.org/component/content/article/5-root/root/81-developing">ISI list of developing countries for 2014</a>. It uses the Guardian API to return a list of news article links and then the Leaflet API displays a MapBox base map of that country next to the list.

<h2>objectives</h2>

The map is meant to zoom to the country that is searched for, every time a new search is performed. The name of that country is retrieved from the search value. I plan to implement OpenLayers3 to animate the map window.

<h2>Technologies used</h2>
- HTML5
- CSS3
- JavaScript
- Leaflet.js
- Prism.js
- Chosen jQuery plugin
- Guardian API
- MapBox API
- JSON

<h2>Instructions</h2>

In order to get the base map to show, you need to sign up for a MapBox id <a href="https://www.mapbox.com/developers/api/">here</a>. Then go to js/map.js and insert the id into in the layer url below 'add a MapBox tile layer'. Alternatively, you can comment out the Mapbox code and enable the OpenStreetMap API instead.