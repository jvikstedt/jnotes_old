'use strict';

require('co-mocha');
var assert = require('assert');
var UserFactory = require('../factories/user');

describe('User', function() {
  it('has a valid factory', function *() {
    var user = UserFactory.build();
    assert.equal(user.isValid(), true);
  });

  it('is invalid without a email', function *() {
    var errors = UserFactory.build({email: null}).validate()[0];
    assert.equal(errors.get('email').message, 'The email is required');
  });

  it('is invalid without a password', function *() {
    var errors = UserFactory.build({password: null}).validate()[0];
    assert.equal(errors.get('password').message, 'The password is required');
  });
});
