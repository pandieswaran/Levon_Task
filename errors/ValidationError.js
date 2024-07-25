const AppError = require('./AppError');

class ValidationError extends AppError {
    constructor(message) {
        super(message || 'Invalid input', 400);
    }
}

module.exports = ValidationError;
