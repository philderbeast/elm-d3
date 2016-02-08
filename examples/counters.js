'use strict';

require('./counters.html');
var d3 = require('d3');
var Elm = require('./counters');

var node = document.getElementById('content-counters');
var app = Elm.embed(Elm.Counters, node);
