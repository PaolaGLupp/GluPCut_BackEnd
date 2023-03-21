const express = require('express');
// const mongoose = require('mongoose');
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

const app = express()
const PORT = 5000;

// MIDDLEWARES
app.use(express.json()); 
app.use(cors());
app.use(mongoSanitize()); 


//  ROUTES
app.use('/', require('./src/routes/index'));

// APP LISTEN
app.listen(PORT, ()=>{
    console.log(`GlupCut in port ${PORT}`)
})

