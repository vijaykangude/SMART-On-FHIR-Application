const route = require("express").Router();
// const auth = require("../auth");      INCOMPLETE MODULE

route.get('/', (req , res) =>{
    res.send("Home Page");
});

route.post('/oauth-init',(req , res) =>{   //route.post('/oauth-init', auth, () );   =  SECURED ROUTES
     
});


module.exports = route;
