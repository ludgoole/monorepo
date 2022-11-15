(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@lg/utils')) :
  typeof define === 'function' && define.amd ? define(['@lg/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Core = factory(global.utils));
})(this, (function (utils) { 'use strict';

  const core = () => {
    console.log('core change');
    utils.log.info('core', 'Hello world!');
  };

  return core;

}));
