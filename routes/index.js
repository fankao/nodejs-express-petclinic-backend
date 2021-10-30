const express = require('express');
const logger = require('../utils/logger')
const AppError = require('../utils/appError');
const globalErrorHandler = require('../utils/errorController');
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');

const router = express();

router.use('/api/owners', ownerRoutes);

router.use('/api/pets', petRoutes);

router.all('*', (req, res, next) => {
    const err = `Can't find ${req.originalUrl} on this server!`;
    logger.error(err)
    next(new AppError(err, 404));
});

router.use(globalErrorHandler);

module.exports = router;