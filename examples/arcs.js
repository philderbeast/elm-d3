'use strict';

require('./arcs.html');
require('./arcs.less');
var d3 = require('d3');
var Elm = require('./arcs');

var node = document.getElementById('content-arcs');
var app = Elm.embed(Elm.arcs, node);
