const jwt = require('jsonwebtoken'); 

function tokenGenerator(email){
    const payload = {
        user: {
            email: email
        }
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1h"
})
}

module.exports = tokenGenerator;