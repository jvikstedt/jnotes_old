'use strict';

require('co-mocha');
var app = require('../../lib/app');
var assert = require('assert');
var request = require('co-supertest').agent(app.listen());

describe('app', function() {
  context('GET /notes', function (){
    it('should be only one', function *() {
      var res = yield request.get('/api/v1/notes').expect(200).end();
      var notes = res.body;
      assert.equal(notes.length, 1);
      assert.equal(notes[0].title, 'test');
    });
  });

  context('POST /notes', function() {
    it('should create with valid attributes', function *() {
      var res = yield request.post('/api/v1/notes')
                  .expect(201)
                  .send({title: 'test'})
                  .end();
    });

    it('should not create with invalid attributes', function *() {
      var res = yield request.post('/api/v1/notes')
                  .expect(404)
                  .send({})
                  .end();
    });
  });
});
