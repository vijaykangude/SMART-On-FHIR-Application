// Web app to fetch diabities patient data from EHR
const express = require("express");
const app = express();
const fs = require("fs");
const jwt = require("jsonwebtoken");

var appReg = fs.readFileSync('appRegistration.json');
var data = JSON.parse(appReg);
var clientID = data.clientID;
var clientSecret = data.clientSecret;
console.log(clientID);
console.log(clientSecret);

app.use('/' , require('./route'));

app.post('/oauth-init', () => {
    let accessToken = jwt.sign(data,clientSecret, {expiresIn: "1h"})
})

app.get('/metadata', (req, res) =>{
    
})

app.listen(9000 , () =>{
    console.log("Server is listening at port: 9000");
})