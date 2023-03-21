const express = require('express');
const router = express.Router();

const userValidator = require("../middlewares/userValidator")



const  registerUser = require("../controllers/userController")
const loginUser = require("../controllers/loginController")


// LOGIN ROUTE
router.post("/login", loginUser);

// REGISTER ROUTE
router.post("/register", userValidator, registerUser)


module.exports = router;