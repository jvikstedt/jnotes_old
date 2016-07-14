'use strict';

var database = require('../database');
var Checkit = require('checkit');

var rules = new Checkit({
  email: 'required',
  password: 'required'
});


var User = database.Model.extend({
  tableName: 'users',
  hasTimestamps: ['created_at', 'updated_at'],
  initialize: function() {
    this.on('saving', this.validateSave);
  },
  validateSave: function() {
    return rules.validate(this.attributes);
  },
  validate: function() {
    return rules.validateSync(this.attributes);
  },
  isValid: function() {
    return this.validate()[0] === null;
  }
});

module.exports = User;
