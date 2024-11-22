const {CustomError} = require("../errors");
const { StatusCodes } = require('http-status-codes'); // Import standardized status codes

const errorHandler = (err, req, res,next) => {
    console.log(` ${err} unattached error`);
    if (err instanceof CustomError) {
        next(); // fixed unattached error by adding next methode in errorHandler middleware
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: 'Something went wrong, please try again later.',
    });
};

module.exports = errorHandler;
/**
 express-async-errors, which is specifically designed to handle errors in asynchronous Express route handlers
 without the need for a custom wrapper function. It's a very convenient tool if you want to reduce boilerplate code even further.
 */