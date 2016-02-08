'use strict';

require('./circles.html');
var d3 = require('d3');
var Elm = require('./circles');

var node = document.getElementById('content-circles');
var app = Elm.embed(Elm.Circles, node);
