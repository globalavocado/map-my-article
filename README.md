[![Code Climate](https://codeclimate.com/github/globalavocado/map-my-article/badges/gpa.svg)](https://codeclimate.com/github/globalavocado/map-my-article)

# Map My Article

This web app does a fuzzy search on the [ISI list of developing countries for 2017](https://www.isi-web.org/index.php/resources/developing-countries). On the left, the Guardian API returns a list of news article links and on the right side, the OpenLayers API zooms into that country on a world map.

<img src="https://github.com/globalavocado/map-my-article/blob/master/images/screenshot.png" alt="screenshot" width="75%" height="75%">

## how to run

After cloning the repo, go to the map-my-article folder and start a web server, e.g. on MacOS you can use the built-in SimpleHTTPServer:

~~~
  ... $ python -m SimpleHTTPServer 8000 
~~~

then open a browser at http://localhost:8000


## Technologies

- map: [OpenLayersJS 4.3.2](https://www.openlayers.org/)
- dropdown menu: [Chosen.js](https://harvesthq.github.io/chosen/)  jQuery library, with [Prism.js](http://prismjs.com/) syntax highlighter
- article search: [Guardian API](http://open-platform.theguardian.com/documentation/)
- HTML/CSS3


## Objectives

The map is meant to zoom to the country that has been searched for, every time a new search is performed. The name of that country is retrieved from the search value and implements the [OpenLayers Animation](http://openlayers.org/en/v4.3.2/examples/animation.html).

### Project status

not much styling but fully functional :smiley:

_Wish List:_ ability to sort articles by date or filter by tag


## User Stories

This project is a static frontend site, so development is behaviour-driven rather than having been unit-tested.

- As a user, I want to get a list of developing country from a drop-down list when I type a letter in the search box.

- As a user, I want to get a list of Guardian articles when I search for a county.

- As a user, I want to see a map of the country I searched for on the right hand side after I click search.
