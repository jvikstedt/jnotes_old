'use strict';

var Factory = require('rosie').Factory;
var User = require('../../lib/models/user');

module.exports = new Factory(User)
  .attr('email', 'foo@jnotes.com')
  .attr('password', 'test');
