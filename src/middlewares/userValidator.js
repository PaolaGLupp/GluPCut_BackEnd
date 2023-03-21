const { check } = require("express-validator");
const  validationCheck  = require('./validationCheck')
 
const userValidator = [ 

        check("name")
        .not()
        .isEmpty()
        .trim()
        .escape().withMessage('We need your name!'),

        check("email")
        .exists()
        .isEmail().withMessage('We need a valid email!')
        .normalizeEmail(),

        check("password")
        .exists()
        .trim()
        .isLength({
            min: 5,
        }).withMessage('The password must have 5 elements'),

    
        (req, res, next) => {
            validationCheck(req, res, next)
        }
    ]
    
 module.exports = userValidator;