'use strict';

var helper = require('./helper');
var config = require('../knexfile');
var knex = require('knex')(config[helper.env]);

module.exports = require('bookshelf')(knex);
