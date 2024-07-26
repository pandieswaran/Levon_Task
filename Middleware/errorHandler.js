// const winston = require('winston');

// const logger = winston.createLogger({
//     level: 'error',
//     format: winston.format.json(),
//     transports: [
//         // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
//         new winston.transports.Console({ format: winston.format.simple() })
//     ]
// });

// const errorHandler = (err, req, res, next) => {
//     if (err.isOperational) {
//         logger.error(`Operational error: ${err.message}`);
//         res.status(err.statusCode).json({ status: err.status, message: err.message });
//     } else {
//         logger.error(`Programming or unknown error: ${err.stack}`);
//         res.status(500).json({ status: 'error', message: 'Something went wrong!' });
//     }
// };

// module.exports = errorHandler;
