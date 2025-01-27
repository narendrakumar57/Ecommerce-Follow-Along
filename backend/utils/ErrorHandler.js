class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statusCode=statusCode

        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports=ErrorHandler