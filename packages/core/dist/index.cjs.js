'use strict';

var utils = require('@lg/utils');

const core = () => {
  console.log('core change');
  utils.log.info('test', 'Hello world!');
};

module.exports = core;
