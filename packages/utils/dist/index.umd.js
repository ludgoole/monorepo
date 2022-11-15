(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('npmlog')) :
	typeof define === 'function' && define.amd ? define(['exports', 'npmlog'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Utils = {}, global.log));
})(this, (function (exports, log) { 'use strict';

	log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info';

	log.heading = 'monorepo-cli';
	log.addLevel('success', 2000, {fg: 'green', bold: true});

	exports.log = log;

}));
