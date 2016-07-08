'use strict';

var fs = require('fs');
var co = require('co');
var pool = require('../database');

co(function *() {
  console.log('Resetting the database...');

  var schema = yield new Promise(function(resolve, reject) {
    fs.readFile(__dirname + '/schema.sql', 'utf-8', function(err, text) {
      if (err) { return reject(err); }
      resolve(text);
    });
  });
  yield pool.query(schema);
}).then(function () {
  console.log('Finished resetting db');
  process.exit(0);
}, function (err){
  console.error('Error:', err, err.stack);
  process.exit(1);
});

