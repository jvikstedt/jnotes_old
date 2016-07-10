'use strict';

var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var helper = require('../helper');

var notes = require('../controllers/notes');

var app = module.exports = koa();

if (helper.env !== 'test') {
  app.use(logger());
}
app.use(bodyParser());

var router = new Router();
router.get('/notes', notes.getAll);
router.post('/notes', notes.create);
router.delete('/notes/:id', notes.delete);

app.use(router.middleware());
