'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  PADDING: 30,
  COLOR: 'rgb(255, 255, 255)',
  SHADOW_OFFSET: 10,
  SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',
  SHADOW_RESET: 'rgba(0, 0, 0, 0)',
};

var BarSize = {
  HEIGHT: 150,
  WIDTH: 40,
};

var Histogram = {
  X: Cloud.X + Cloud.PADDING,
  Y: Cloud.Y + Cloud.HEIGHT - Cloud.PADDING,
};

var BarMargin = {
  TOP: Histogram.Y - 20,
  BOTTOM: Histogram.Y + 10,
};

var TextData = {
  PADDING: 10,
  LINE_HEIGHT: 20,
  COLOR: '#000',
  FONT: 'normal 16px PT Mono',
  BASELINE: 'hanging',
};

var INNER_GAP = 50;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomAlpha = function () {
  return '0.' + getRandomNumber(4, 9);
};

var renderBarColor = function (ctx, name) {
  ctx.fillStyle = name === 'Вы'
    ? 'rgb(255, 0, 0)'
    : 'rgba(0, 0, 255, ' + getRandomAlpha() + ')';
};

var renderCloud = function (ctx) {
  ctx.fillStyle = Cloud.COLOR;
  ctx.shadowColor = Cloud.SHADOW_COLOR; // 'rgba(0, 0, 0, 0.7)'
  ctx.shadowOffsetX = Cloud.SHADOW_OFFSET;
  ctx.shadowOffsetY = Cloud.SHADOW_OFFSET;
  ctx.shadowBlur = 0;
  ctx.fillRect(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT);

  ctx.shadowColor = Cloud.SHADOW_RESET; // 'rgba(0, 0, 0, 0)'
};

var renderTitle = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var x = 120;
  var y = 40;
  var shift = 20;

  var text = 'Ура вы победили! \nСписок результатов: '.split('\n');
  for (var i = 0; i < text.length; i++) {
    ctx.fillText(text[i], x, y + (shift * i));
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx);
  renderTitle(ctx);

  var maxTime = Math.max.apply(null, times);
  var maxPlayers = Math.min(players.length, times.length);

  for (var i = 0; i < maxPlayers; i++) {
    var time = Math.floor(times[i]);
    var name = players[i];

    var barX = Histogram.X + (INNER_GAP + BarSize.WIDTH) * i;
    var barHeight = Math.floor(-(time / maxTime * BarSize.HEIGHT));

    ctx.fillStyle = TextData.COLOR;
    ctx.font = TextData.FONT;
    ctx.textBaseline = TextData.BASELINE;

    renderBarColor(ctx, name);

    ctx.fillRect(barX, Histogram.Y, BarSize.WIDTH, barHeight);

    ctx.fillText(time, barX, barHeight + BarMargin.TOP);
    ctx.fillText(name, barX, BarMargin.BOTTOM);
  }
};
