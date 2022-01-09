const axios = require('axios');
const jwtDecode = require('jwt-decode');
const qs = require('qs');
const fs = require("fs");

const appRegistration = fs.readFileSync('appRegistration.json');

class Service {
    accessToken = '';

    patientDemographicDetails = {};
    practitionerDetails = {};
    patientObservationDetails = {};

    async oauthInit(req, res) {
        try {
            console.log('oauthInit');
            const issuer = req.query.iss;
            const launch = req.query.launch;
            const appName = req.params.appName;
            console.log('Issuer/FHIR Server URL: ' + issuer);
            console.log('appName: ' + appName);
            console.log('Launch Code: ' + launch);
            const metadata = await this.getMetadataOfFhirServer(issuer);
            const authorizationEendpoint = metadata.authorization_endpoint;
            const tokenEndpoint = metadata.token_endpoint;

            console.log('Authorization Endpoint: ' + authorizationEendpoint);
            console.log('Token Endpoint: ' + tokenEndpoint);
            const url = authorizationEendpoint + '?response_type=code&client_id=77cc0f9d-ada4-4eec-9356-2a9b4cfabf66&redirect_uri=http://localhost:9000/oauth-callback&' + 'launch=' + launch + '&scope=launch+patient/*.*+openid+profile&state=98wrghuwuogerg97&aud=https://api.logicahealth.org/HealthcareProject/data';

            // Browser will redirect to this url, it will ask for permission from user to tun our application.
            // Once user gives permission, it will redirect to our application with authorizationCode in query string.
            res.redirect(url);
        } catch (error) {
            console.log('Error processing oauth init request, error: ' + JSON.stringify(error));
        }
    }

    async oauthCallback(req, res) {
        console.log('oauthCallback');
        console.log('req.query: ' + JSON.stringify(req.query));
        const authorizationCode = req.query.code;
        console.log('Authorization Code: ' + authorizationCode);
        // get Access Token
        // To Do Get clientId and Client Secret from appRegistration file
        const accessTokenResponse = await this.getAccessToken(authorizationCode);
        const accessToken = accessTokenResponse.access_token;
        const idToken = accessTokenResponse.id_token;
        const patientId = accessTokenResponse.patient;
        console.log('Access Token: ' + JSON.stringify(accessToken));
        console.log('Id Token: ' + JSON.stringify(idToken));
        console.log('Patient Id: ' + patientId);
        const decoded = jwtDecode(idToken);
        const practitioner = decoded.fhirUser;
        console.log('Practitioner Id: ' + practitioner);
        const practitionerId = practitioner.split('/')[1];
        
        const patientResponse = await this.getPatient(patientId, accessToken);
        this.patientDemographicDetails = patientResponse;

        console.log('Patient Response: ' + JSON.stringify(patientResponse));
        const practitionerResponse = await this.getPractitioner(practitionerId, accessToken);
        console.log('Practitioner Response: ' + JSON.stringify(practitionerResponse));
        this.practitionerDetails = practitionerResponse;
        const observationResponse = await this.getObservation(patientId, accessToken);
        this.patientObservationDetails = observationResponse;
        console.log('Redirecting to home page for now');
        res.redirect('/');
    }

    getPatientDetails(req, res){
        res.send( {
            patientDemographicDetails: this.patientDemographicDetails,
            practitionerDetails: this.practitionerDetails,
            patientObservationDetails: this.patientObservationDetails
        });
    }
    async getMetadataOfFhirServer(issuer) {
        try {
            console.log('getMetadataOfFhirServer');
            const response = await axios.get(issuer + '/.well-known/smart-configuration');
            return response.data;
        } catch (error) {
            console.log('Error while getting metadata from FHIR server, error: ' + JSON.stringify(error));
        }
    }

    async auhtoirzationCall(issuer, authorizationEendpoint, launch) {
        try {
            console.log('auhtoirzationCall');
            const url = 'https://auth.logicahealth.org/authorize?response_type=code&client_id=77cc0f9d-ada4-4eec-9356-2a9b4cfabf66&redirect_uri=http://localhost:9000/oauth-callback&' + 'launch=' + launch + '&scope=launch+patient/*.*+openid+profile&state=98wrghuwuogerg97&aud=https://api.logicahealth.org/HealthcareProject/data';

            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log('Error while processing authorization request, error: ' + JSON.stringify(error));
        }
    }

    async getAccessToken(authorizationCode) {
        try {
            console.log('getAccessToken');

            const data = qs.stringify({
                'grant_type': 'authorization_code',
                'code': authorizationCode,
                'redirect_uri': 'http://localhost:9000/oauth-callback'
            });

            const config = {
                method: 'post',
                url: 'https://auth.logicahealth.org/token',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic NzdjYzBmOWQtYWRhNC00ZWVjLTkzNTYtMmE5YjRjZmFiZjY2OkVKdERTbTJlTFVIMVhLZlg5ZXBMRVVLb0FqU245bldMcEtEUHNScDVyajVHQTA0ejdNbmZhYkp3Z2w4T1pKd2IyVXJkLTlvS3ZxMjFKSExsdW5kcHRB'
                },
                data: data
            };
            const response = await axios(config);
            console.log('response: ' + JSON.stringify(response.data));
            return response.data;            
        } catch (error) {
            console.log('Error while getting access token, error: ' + JSON.stringify(error));
        }
    }

    async getPatient(patientId, accessToken) {
        try {
            console.log('getPatient');
            const config = {
                method: 'get',
                url: 'https://api.logicahealth.org/HealthcareProject/data/Patient/' + patientId,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            };
            const response = await axios(config);
            console.log('response: ' + JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Error while getting patient, error: ' + JSON.stringify(error));
        }
    }
    async getPractitioner(practitionerId, accessToken) {
        try {
            console.log('getPractitioner');
            const config = {
                method: 'get',
                url: 'https://api.logicahealth.org/HealthcareProject/data/Practitioner/' + practitionerId,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            };
            const response = await axios(config);
            console.log('response: ' + JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Error while getting practitioner, error: ' + JSON.stringify(error));
        }
    }

    async getObservation(patientId, accessToken) {
        try {
            console.log('getObservation');
            const config = {
                method: 'get',
                url: 'https://api.logicahealth.org/HealthcareProject/data/Observation?patient=' + patientId,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            };
            const response = await axios(config);
            //console.log('response: ' + JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Error while getting observation, error: ' + JSON.stringify(error));
        }
    }

}
module.exports = Service;