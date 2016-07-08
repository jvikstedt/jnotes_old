'use strict';

var database = require('../database');

var Note = database.Model.extend({
  tableName: 'notes'
});

module.exports = Note;
