const express = require("express");
const route = require("express").Router();


route.get('/', (req , res) =>{
    res.send("get request");
});

route.post('/oauth-init',(req , res) =>{
    
});


module.exports = route;
