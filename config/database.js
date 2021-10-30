require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    schema: process.env.DEV_DB_SCHEMA,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOSTNAME,
    dialect: 'postgres',
    define: {
      timestamps: false
    },
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    schema: process.env.CI_DB_SCHEMA,
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false
    },
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    schema: process.env.PROD_DB_SCHEMA,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
    define: {
      timestamps: false
    },
  },
}
