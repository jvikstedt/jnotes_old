'use strict';

var koa = require('koa');
var mount = require('koa-mount');
var apiV1 = require('./api/v1');
var cors = require('koa-cors');

var app = module.exports = koa();

app.use(cors());
app.use(mount('/api/v1', apiV1));
