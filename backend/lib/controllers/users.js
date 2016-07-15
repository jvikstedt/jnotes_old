'use strict';

var User = require('../models/user');

exports.signup = function *() {
  const email = this.request.body.email || '';
  const password = this.request.body.password;
  const passwordConfirmation = this.request.body.passwordConfirmation;

  const existingUser = yield User.where({ email: email }).fetch();

  if (existingUser) {
    this.status = 422;
    this.body = { errors: {email: 'Email is in use'} };
  } else {
    const user = new User({email: email, password: password});
    try {
      yield user.save();

      this.status = 201;
    } catch (e) {
      this.status = 422;
      this.body = { errors: e };
    }
  }
};
