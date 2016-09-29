var View = function (game, $el) {
  this.game = game;
  this.$el = $el;

  this.setupBoard();
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
