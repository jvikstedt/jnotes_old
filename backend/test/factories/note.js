'use strict';

var Factory = require('rosie').Factory;
var Note = require('../../lib/models/note');

module.exports = new Factory(Note)
  .attr('title', 'Something');
