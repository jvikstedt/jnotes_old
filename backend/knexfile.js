// Update with your config settings.

module.exports = {

  test: {
    client: 'postgresql',
    connection: {
      database: 'jnotes_test',
      user:     'jnotes',
      password: 'jnotes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      database: 'jnotes_development',
      user:     'jnotes',
      password: 'jnotes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.JNOTES_DB,
      user:     process.env.JNOTES_DB_USER,
      password: process.env.JNOTES_DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
