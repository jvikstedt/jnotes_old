'use strict';

var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

var notes = require('../controllers/notes');

var app = module.exports = koa();

app.use(bodyParser());

var router = new Router();
router.get('/notes', notes.getAll);
router.post('/notes', notes.create);

app.use(router.middleware());
