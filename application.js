// Simple Web App to explore get and post request by using Express framework
const express = require("express");
const app = express();

const fs = require("fs");         //for file handling fs module imported

let obj = {
    "firstname": "Vijay", 
    "lastname" : "Kangude"
};

app.get("/",(req, res) =>{
    let obj1 = JSON.stringify(obj);   //displays json object by converting into string format
    res.send(obj1);                    
});

app.get("/getreq", (req, res) =>{
    let obj1 = fs.readFileSync("data.json");    // reading object from direcotry
    res.send(obj1);
});

app.post("/postreq", (req, res) =>{
    let obj2 = JSON.stringify(obj);
    res.send(`Print input from user request - ${obj2}`);    //As you said in that google dfrive file
});

const port = 80;
app.listen(port, () =>{
    console.log(`Application started successfully at port: ${port}`);  //learned a bacticks use from tutorial;s
});