const customAPIError = require('../errors/customAPIError')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customAPIError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}