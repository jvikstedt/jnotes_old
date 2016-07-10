'use strict';

require('co-mocha');
var app = require('../../lib/app');
var assert = require('assert');
var request = require('co-supertest').agent(app.listen());
var NoteFactory = require('../factories/note');
var database = require('../../lib/database');

describe('app', function() {

  context('GET /notes', function (){
    before(function *() {
      yield database.clean();
    });

    it('Should list all notes in the database', function *() {
      yield NoteFactory.build({title: 'Something1'}).save();
      yield NoteFactory.build({title: 'Something2'}).save();
      var res = yield request.get('/api/v1/notes').expect(200).end();
      var notes = res.body.results;
      assert.equal(notes.length, 2);
      assert.equal(notes[0].title, 'Something1');
      assert.equal(notes[1].title, 'Something2');
    });
  });

  context('POST /notes', function() {
    it('should create with valid attributes', function *() {
      yield request.post('/api/v1/notes')
        .expect(201)
        .send(NoteFactory.attributes())
        .end();
    });

    it('should not create with invalid attributes', function *() {
      yield request.post('/api/v1/notes')
        .expect(404)
        .send(NoteFactory.attributes({title: null}))
        .end();
    });
  });
});
