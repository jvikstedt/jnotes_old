'use strict';

var env = process.env.ENV_VARIABLE || 'development';
var config = require('../knexfile');
var knex = require('knex')(config[env]);

module.exports = require('bookshelf')(knex);
