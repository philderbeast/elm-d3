'use strict';

require('./boxes.html');
var d3 = require('d3');
var Elm = require('./boxes');

var node = document.getElementById('content-boxes');
var app = Elm.embed(Elm.Boxes, node);
