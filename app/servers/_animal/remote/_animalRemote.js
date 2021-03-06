'use strict';

var P = require('quick-pomelo').Promise;
var logger = require('quick-pomelo').logger.getLogger('_animalRemote', __filename);

var Remote = function (app) {
    this.app = app;
};

module.exports = function (app) {
    return new Remote(app);
};

// 游戏配置
Remote.prototype.configGame = function (gameConfig, cb) {
	logger.info('===_animalRemote.prototype.configGame: %s, args: %j===', this.app.getServerId(), arguments);
	return this.app.controllers._animal.configGameAsync(gameConfig)
		.nodeify(cb);
};

