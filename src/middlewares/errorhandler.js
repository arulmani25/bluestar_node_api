// errorHandler

const utils = require('../utils/errorresponse');

const errorHandler = (err, req, res, next) => {
    let errorResponse = {
        statusCode: 500,
        errorMessage: 'Internal Server Error',
        errors: []
    };

    if (err.errors) {
        errorResponse = {
            statusCode: err.status || 400,
            errorMessage: 'Invalid Request Body',
            errors: err.errors || []
        };
    } else {
        errorResponse = {
            ...utils.errorResponse(err.message),
            status: 'Failure',
            Data: [],
            errors: err.errors || []
        };
    }
    res.status(errorResponse.Code).json(errorResponse);
};

module.exports = { errorHandler };
