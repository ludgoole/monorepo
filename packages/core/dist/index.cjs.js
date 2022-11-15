'use strict';

var utils = require('@lg/utils');

const core = () => {
  console.log('core package');
  utils.log.info('core', 'Hello world!');
};

module.exports = core;
