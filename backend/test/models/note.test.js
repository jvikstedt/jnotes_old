'use strict';

require('co-mocha');
var assert = require('assert');
var Note = require('../../lib/models/note');

describe('Note', function() {
  it('is invalid without a title', function *() {
    var errors = new Note({}).validate()[0];
    assert.equal(errors.get('title').message, 'The title is required');
  });
});
