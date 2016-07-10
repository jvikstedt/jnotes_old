'use strict';

var helper = require('./helper');
var config = require('../knexfile');
var knex = require('knex')(config[helper.env]);
var knexCleaner = require('knex-cleaner');

module.exports = require('bookshelf')(knex);

module.exports.clean = function*() {
  yield knexCleaner.clean(knex, {ignoreTables: ['knex_migrations']}).then(function() {});
};

