// logger.js

const winston = require('winston');

// Define the logger variable
const logger = winston.createLogger({
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log' })
    ]
});

// Export the logger instance
module.exports = logger;
