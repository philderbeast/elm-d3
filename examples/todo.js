'use strict';

require('./todo.html');
require('./todo.less');
var d3 = require('d3');
var Elm = require('./todo');

var node = document.getElementById('content-todo');
var app = Elm.embed(Elm.Todo, node);
