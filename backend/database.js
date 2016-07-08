'use strict';

var pg = require('pg');

var config = {
  user: 'jnotes',
  database: 'jnotes_development',
  password: 'jnotes',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

module.exports = new pg.Pool(config);
