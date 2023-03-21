const connection = require('../config/connectionDB')
const bcrypt = require('bcrypt');
const tokenGenerator = require("../utils/tokenGenerator")


const  loginUser = async (req, res) => {

    const { email, password } = req.body

    const db = await connection();

    try {

        const user = await db.collection('userList').findOne({ email: email })


        if (!user) {
            return({
                error: "Wrong email. Register first!"
            })
        } else {

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {

                    return({
                        error: "Server error"
                    })

                } else if (result) {

                    const token = tokenGenerator(user.email);
 
                    res.status(201).json ({
                        message: 'User signed in!',
                        token,
                        name: user.name
                    })

                } else {
                    if (!result) {
                        return ({
                            error: 'Wrong password!'
                        })
                    }
                }

            })
        }


    } catch (err) {
        res.status(599).json({
            error: 'Database error'
        })
    }

}

module.exports = loginUser;