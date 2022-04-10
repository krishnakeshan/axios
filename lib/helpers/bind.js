'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = Array.from(arguments);
    return fn.apply(thisArg, args);
  };
};
