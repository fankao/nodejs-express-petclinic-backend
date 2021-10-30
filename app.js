const express = require('express');

// Start express app
const app = express();
app.use(express.json());

const routes = require('./routes');
app.use(routes);

module.exports = app;
