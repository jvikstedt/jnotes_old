'use strict';

require('co-mocha');
var assert = require('assert');
var NoteFactory = require('../factories/note');

describe('Note', function() {
  it('has a valid factory', function *() {
    var note = NoteFactory.build();
    assert.equal(note.isValid(), true);
  });

  it('is invalid without a title', function *() {
    var errors = NoteFactory.build({title: null}).validate()[0];
    assert.equal(errors.get('title').message, 'The title is required');
  });
});
