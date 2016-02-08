'use strict';

require('./clicks.html');
var d3 = require('d3');
var Elm = require('./clicks');

var node = document.getElementById('content-clicks');
var app = Elm.embed(Elm.Clicks, node);
