'use strict';

var koa = require('koa');
var app = koa();
var Note = require('./lib/models/note');

app.use(function *(){
  var note = yield Note.where({id: 1}).fetch();
  console.log(note.get('title'));
  this.body = 'Hello World';
});

app.listen(3000);
