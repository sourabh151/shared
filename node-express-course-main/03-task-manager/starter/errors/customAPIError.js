class customAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
    createCustomError = function(msg, statusCode){
        return new customAPIError(msg, statusCode)
    }
}

module.exports = customAPIError