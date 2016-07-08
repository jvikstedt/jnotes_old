'use strict';

var database = require('../database');
var Checkit = require('checkit');

var rules = new Checkit({
  title: 'required'
});


var Note = database.Model.extend({
  tableName: 'notes',
  hasTimestamps: ['created_at', 'updated_at'],
  initialize: function() {
    this.on('saving', this.validateSave);
  },
  validateSave: function() {
    return rules.validate(this.attributes);
  },
  validate: function() {
    return rules.validateSync(this.attributes);
  }
});

module.exports = Note;
