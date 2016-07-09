'use strict';

var helper = require('../helper');
var Note = require('../models/note');

exports.getAll = function *() {
  this.body = [{id: 1, title: 'test'}];
  this.status = 200;
};

exports.create = function *() {
  var data = helper.pickByKeys(this.request.body, ['title']);
  var note = new Note(data);
  try {
    yield note.save();
    this.status = 201;
    this.body = { results: note };
  } catch(e) {
    this.status = 404;
    this.body = { errors: e };
  }
};
