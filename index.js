const express = require("express");
const app = express();
const fs = require("fs");
const jwt = require("jsonwebtoken");

//routes 
app.use('/' , require('./routes/route'));

// Middlewares
app.use(express.json());

var appReg = fs.readFileSync('appRegistration.json');
var data = JSON.parse(appReg);
var clientID = data.clientID;
var clientSecret = data.clientSecret;

const accessToken = jwt.sign({user_id: clientID},clientSecret, {expiresIn: "1h"});
console.log(accessToken);


app.listen(9000 , () =>{
    console.log("Server is listening at port: 9000");
})