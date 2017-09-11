[![Code Climate](https://codeclimate.com/github/globalavocado/map-my-article/badges/gpa.svg)](https://codeclimate.com/github/globalavocado/map-my-article)

<h1>Map My Article</h1>

This web app does a fuzzy search on the <a href="https://www.isi-web.org/index.php/resources/developing-countries">ISI list of developing countries for 2017</a>. On the left, the Guardian API returns a list of news article links and on the right side, the OpenLayers API zooms into that country on a world map.

<h2>Technologies</h2>
- JavaScript
- OpenLayersJS
- Chosen jQuery plugin
- Guardian API
- HTML5
- CSS3
- Prism.js

<h2>Objectives</h2>

The map is meant to zoom to the country that is searched for, every time a new search is performed. The name of that country is retrieved from the search value. I am implementing OpenLayers3 <a href="http://openlayers.org/en/v3.4.0/examples/animation.html">OpenLayers Animation</a> to animate the map window.

_Wish list:_
- search by article tag instead of title keyword.

<h2>User Stories</h2>

This project is a static frontend site, so development is behaviour-driven rather than having been unit-tested.

- As a user, I want to get a list of developing country from a drop-down list when I type a letter in the search box.

- As a user, I want to get a list of Guardian articles when I search for a county.

- As a user, I want to see a map of the country I searched for on the right hand side after I click search.














