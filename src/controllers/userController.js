const connection = require('../config/connectionDB')
const {UserManager} = require('../models/users')
const models = require('../models/users')

const registerUser = async (req, res) => {

    const dataBaseRep = await UserManager.registerUser(req.body); 
    res.status(201).json(dataBaseRep);

}


module.exports = registerUser ; 