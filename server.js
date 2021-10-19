const dotenv = require('dotenv');
const logger = require('./utils/logger')

process.on('uncaughtException', err => {
    logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    logger.error(`${err.name} ${err.message}`);
    process.exit(1);
});

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    logger.info(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
    logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
    logger.error(`${err.name} ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});

process.on('SIGTERM', () => {
    logger.error('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        logger.error('💥 Process terminated!');
    });
});
