const CustomAPIError = require("./custom-error");
const {StatusCodes} = require("http-status-codes")
class UnauthorizedError extends CustomAPIError{
    constructor(msg){
        super(msg,StatusCodes.UNAUTHORIZED)
    }
}
module.exports = UnauthorizedError;