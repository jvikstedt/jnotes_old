'use strict';

var koa = require('koa');
var Router = require('koa-router');

var notes = require('../controllers/notes');

var app = module.exports = koa();

var router = new Router();
router.get('/notes', notes.getAll);

app.use(router.middleware());
