const {validationResult} = require('express-validator');

const validationCheck = (req, res, next) => {

    try{
        // If validation works, it goes to next element
        validationResult(req).throw()
        return next();

    } catch(err){
        // otherwise, it sends the error array
        res.status(403);
        res.send({
            errors: err.array()
        })
    }
}

module.exports = validationCheck