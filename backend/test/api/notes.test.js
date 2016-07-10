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
        .expect(422)
        .send(NoteFactory.attributes({title: null}))
        .end();
    });
  });

  context('DELETE /notes/:id', function() {
    before(function *() {
      yield database.clean();
    });

    it('should destroy record when valid id', function*() {
      var note = yield NoteFactory.build().save();
      yield request.delete(`/api/v1/notes/${note.id}`)
        .expect(204)
        .end();
      assert.equal(yield note.refresh(), null);
    });

    it('should return 404 if record not found', function*() {
      yield request.delete('/api/v1/notes/999')
        .expect(404)
        .end();
    });
  });


  context('PATCH /notes/:id', function() {
    before(function *() {
      yield database.clean();
    });

    it('should update record when valid id', function*() {
      var note = yield NoteFactory.build().save();
      yield request.patch(`/api/v1/notes/${note.id}`)
        .expect(200)
        .send(NoteFactory.attributes({title: 'new_value'}))
        .end();
      yield note.refresh();
      assert.equal(note.get('title'), 'new_value');
    });


    it('should not update record if invalid value', function*() {
      var note = yield NoteFactory.build({title: 'Something1'}).save();
      yield request.patch(`/api/v1/notes/${note.id}`)
        .expect(422)
        .send(NoteFactory.attributes({title: null}))
        .end();
      yield note.refresh();
      assert.equal(note.get('title'), 'Something1');
    });

    it('should return 404 if record not found', function*() {
      yield request.patch('/api/v1/notes/999')
        .expect(404)
        .end();
    });
  });
});
