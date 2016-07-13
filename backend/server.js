'use strict';

var app = require('./lib/app');
var port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
