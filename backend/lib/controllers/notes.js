'use strict';

exports.getAll = function *() {
  this.body = [{id: 1, title: 'test'}];
  this.status = 200;
};
