'use strict';

var koa = require('koa');
var app = koa();

var pool = require('./database.js');

app.use(function *(){
  this.body = 'Hello World';

  var result = yield pool.query('select NOW()');
  console.log(result.rows[0].now);
});

app.listen(3000);
