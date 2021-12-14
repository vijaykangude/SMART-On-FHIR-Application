const express = require("express");
const routes = require('./routes/route');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
// Middlewares
app.use(express.json());
app.use(helmet({ noCache: true }));
app.use(cors());
//routes 
app.use('/' , routes);

app.listen(9000 , () =>{
    console.log("Server is listening at port: 9000");
})