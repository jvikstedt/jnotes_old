'use strict';

var _ = require('lodash');

module.exports.pickByKeys = function(body, keys) {
  return _.pick(body, keys);
};

module.exports.env = process.env.NODE_ENV || 'development';
