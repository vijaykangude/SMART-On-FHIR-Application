// Simple Web App to explore get and post request by using Express framework
const express = require("express");
const app = express();
const port = 80;       // used a 80 port because we can view just typing localhost

app.use('/' , require('./route'));



app.listen(port , () =>{
    console.log(`Application started successfully at port: ${port}`);  //learned a bacticks use from tutorial;s
});