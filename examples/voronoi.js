'use strict';

require('./voronoi.html');
var d3 = require('d3');
var Elm = require('./voronoi');

var node = document.getElementById('content-voronoi');
var app = Elm.embed(Elm.Voronoi, node);
