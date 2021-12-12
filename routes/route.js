const route = require("express").Router();
// const auth = require("../auth");

route.get('/', (req , res) =>{        // route.get('/',auth , () );    = SECURED ROUTES
    res.send("Home Page");
});

route.post('/oauth-init',(req , res) =>{   //route.post('/oauth-init', auth, () );   =  SECURED ROUTES
     
});


module.exports = route;
