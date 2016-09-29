var View = require('./view.js');
var Game = require('./game');

$(function () {
  var rootEl = $('.ttt');
  var game = new Game();
  new View(game, rootEl);
});
