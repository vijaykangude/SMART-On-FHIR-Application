const express = require("express");
const route = require("express").Router();


route.get('/', (req , res) =>{
    res.send("get request");
});

route.post('/view',(req , res) =>{      //post request for root page just for practice
    res.send("Printed input from user request is");
});

route.get('/about', (req , res) =>{
    res.send("This is About Page");
});

module.exports = route;
