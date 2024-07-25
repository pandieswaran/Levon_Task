const AppError = require('./AppError');

class DatabaseError extends AppError {
    constructor(message) {
        super(message || 'Database operation failed', 500);
    }
}

module.exports = DatabaseError;
