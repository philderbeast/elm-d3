'use strict';

require('./lines.html');
require('./lines.less');
var d3 = require('d3');
var Elm = require('./lines');

var node = document.getElementById('content-lines');
var app = Elm.embed(Elm.Lines, node);
