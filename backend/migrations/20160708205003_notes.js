'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('notes', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('notes')
  ]);
};
