'use strict';

var helper = require('../helper');
var Note = require('../models/note');

exports.getAll = function *() {
  var notes = yield Note.fetchAll();
  this.body = { results: notes };
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

exports.delete = function *() {
  var note = yield Note.where({ id: this.params.id }).fetch();
  if (note) {
    yield note.destroy();
    this.status = 204;
  } else {
    this.status = 404;
  }
};
