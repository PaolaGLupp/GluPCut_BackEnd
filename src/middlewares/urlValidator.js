const { check } = require("express-validator");
const  validationCheck  = require('./validationCheck')



//USING EXPRESS VALIDATOR
const urlValidator =[ 
    check("longUrl")
    .exists()
    .isURL().withMessage('We need a valid URL!'),

    (req, res, next) => {
        validationCheck(req, res, next)
    }
]

module.exports = urlValidator;



/// USING THE URL CLASS
/*const urlValidator = (req, res, next) => {
    
        const urlCheck = new URL(req.body.longUrl);
     
        (req, res, next) => {
            validationCheck(req, res, next)
        }
}*/


/// USING REGEX
/* const urlValidator = (req, res, next) => {

    const url = req.body.longUrl

    We use a regular expression
    const regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    const noHttpRegEx = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

    const checkedUrlHttp = regEx.test(req.body.url)

    const checkedUrlNoHttp = noHttpRegEx.test(req.body.url)

    if (!checkedUrlHttp && !checkedUrlNoHttp) {
        return res.status(403).json({
            error: 'Url not accepted'
        })
    }

    if(!isURL(url)){
        console.log('pepe')
    }

    // isDataURI(url)     

} */