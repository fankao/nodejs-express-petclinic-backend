const express = require('express');
const logger = require('./utils/logger')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./utils/errorController');

// Start express app
const app = express();
app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.all('*', (req, res, next) => {
    const err = `Can't find ${req.originalUrl} on this server!`;
    logger.error(err)
    next(new AppError(err, 404));
});

app.use(globalErrorHandler);

module.exports = app;
