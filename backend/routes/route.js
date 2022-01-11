const router = require("express").Router();
const Service = require("../services/Service");
const service = new Service();

router.get('/oauth-init/:appName', async function(req, res){
    return await service.oauthInit(req, res);
});

router.get('/oauth-callback', async function(req, res){
    return await service.oauthCallback(req, res);
});

// Request from frontend
router.get('/patientDetails', (req , res) =>{
    return service.getPatientDetails(req , res);
});

module.exports = router;
