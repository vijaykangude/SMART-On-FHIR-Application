const express = require("express");
const route = require("express").Router();

var obj = [{
    "Id": 1,
    "firstname": "Vijay",
    "lastname": "Kangude"
}, {
    "Id": 2,
    "firstname": "Ganesh",
    "lastname": "Surwase"
}]

route.get('/', (req , res) =>{
    res.json(obj);
});

route.post('/view',(req , res) =>{      //post request for root page just for practice
    let a = JSON.stringify(obj);
    res.send(`Printed input from user request is: ${a}`);
});

route.get('/About', (req , res) =>{
    res.send("This is About Page");
});

module.exports = route;
