const connection = require('../config/connectionDB')
const bcrypt = require('bcrypt');
const tokenGenerator = require("../utils/tokenGenerator")

class UserManager {


    // static async loginUser(user) {

    //     const { email, password } = user

    //     const db = await connection();

    //     try {

    //         const user = await db.collection('userList').findOne({ email: email })


    //         if (!user) {
    //             return({
    //                 error: "Wrong email. Register first!"
    //             })
    //         } else {

    //             bcrypt.compare(password, user.password, (err, result) => {
    //                 if (err) {

    //                     return({
    //                         error: "Server error"
    //                     })

    //                 } else if (result) {

    //                     const token = tokenGenerator(user.email);
    //                     console.log(token);

    //                     res.status(201).json ({
    //                         message: 'User signed in!',
    //                         token,
    //                         name: user.name
    //                     })

    //                 } else {
    //                     if (!result) {
    //                         return ({
    //                             error: 'Wrong password!'
    //                         })
    //                     }
    //                 }

    //             })
    //         }


    //     } catch (err) {
    //         res.status(599).json({
    //             error: 'Database error'
    //         })
    //     }

    // }


    static async registerUser(newUser) {

        const { name, email, password } = newUser;

        const db = await connection();


        const repeatedEmail = await db.collection('userList').findOne({ email: newUser.email });

        if (repeatedEmail) {

            return ({
                error: "This user already exists!"
            })

        } else {

            const hash = await bcrypt.hash(newUser.password, 10)
            if ("" == hash) {
                return (({
                    error: 'Error while encrypting your password'
                }))
            }

            try {

                await db.collection('userList').insertOne({
                    name: newUser.name,
                    password: hash,
                    email: newUser.email
                })

            } catch (e) {

                return ({
                    error: 'Database error while inserting data'
                })
            }

            const token = tokenGenerator(email);
            return ({
                token: token,
                user: name,
            })

        }

    }

}

module.exports = { UserManager }