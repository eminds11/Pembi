// SETUP EXPRESS
//========
var express 	= require("express");
var app 		= express();
var async		= require('async');
var fs			= require("fs");
var router		= express.Router();
var request 	= require('request');

// STRAVA AUTH ROUTES
// ==============
// Initial page redirecting to Strava
router.get('/stravaauth', function (req, res) {
	console.log("sending Strava Auth ..");
	res.redirect("https://www.strava.com/oauth/authorize?client_id=20249&response_type=code&redirect_uri=https://pembi-system-trackz.c9users.io/getauthcode&approval_prompt=force");
});

// Get auth code & exchange for access token
router.get('/getauthcode', function (req, res) {

	console.log("authcode callback reached ...");
	var authCode = req.query.code;
	var errorcode = req.query.error;
	console.log("authtoken : " + authCode + " ; errorcode : " + errorcode);

	// check auth request response	
	if(errorcode == "access_denied"){
		console.log("errorcode");
		return;
	}
	console.log("Auth Code : " + authCode);

	// respond back to Strava with authcode to get accesstoken
	//FUNCTION A
	var request_params = {
	  "client_id": 20249,
	  "client_secret": "405fa022a069863c438a49429d8d2c37c3be10b4",
	  "code": authCode
	};

	var paramlist = [];
	for (var pk in request_params) {
		paramlist.push(pk + "=" + request_params[pk]);
	};
	var body_string = paramlist.join("&");

	var request_details = {
	method: "POST",
	uri: 'https://www.strava.com/oauth/token',
	body: body_string
	};
	
	var responseContent;

	request(request_details, function(err, res, body) {
		if(err){
			console.log('error:', err);
			return;
		} else {
			if (res && (res.statusCode === 200 || res.statusCode === 201)) {
	    		responseContent = JSON.parse(body);

	 // FUNCTION B() write athete to DB
		

	    		res.send("stravalinksuccess", {});	
			}
		}
	});		//end of request
});


// FUNCTION B() write athete to DB
function saveAthlete(req, res, next) {
	// get athlete JSON
	// verify athlete in DB???
	// write info to DB - strava ID, access token, ???
	// handle errors
	// return
	
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	// return ???;
	}


module.exports = router;