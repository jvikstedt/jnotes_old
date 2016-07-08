'use strict';

const rules = {
  title: 'required'
};

var database = require('../database');
var Checkit = require('checkit');

var Note = database.Model.extend({
  tableName: 'notes',
  hasTimestamps: ['created_at', 'updated_at'],
  initialize: function() {
    this.on('saving', this.validateSave);
  },
  validateSave: function() {
    return new Checkit(rules).run(this.attributes);
  }
});

module.exports = Note;
