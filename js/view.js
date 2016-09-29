var View = function (game, $el) {
  this.game = game;
  this.$el = $el;

  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on('click', 'li', function (e) {
    var $square = $(e.currentTarget);
    this.makeMove($square);
  }.bind(this));
};

View.prototype.makeMove = function ($square) {
  var pos = $square.data("pos");
  var currentPlayer = this.game.currentPlayer;

  try {
    this.game.playMove(pos);
  } catch (e) {
    return;
  }

  $square.text(currentPlayer);

  if (this.game.isOver()) {
    this.$el.off("click");

    var winner = this.game.winner();

    if (winner) {
      alert("You win, " + winner + "!");
    } else {
      alert("It's a draw!");
    }
  }
};

View.prototype.setupBoard = function () {
  $ul = $("<ul>");

  for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (var colIdx = 0; colIdx < 3; colIdx++) {
      var $li = $("<li>");
      $li.data("pos", [rowIdx, colIdx]);
      $ul.append($li);
    }
  }

  this.$el.append($ul);
};

module.exports = View;
