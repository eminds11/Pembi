// SETUP EXPRESS
//========
var express 	= require("express");
var app 		= express();
var async		= require('async');
var fs			= require("fs");
var router		= express.Router();
var request 	= require('request');

// !!!!!!!!!!the 4 rows below are required to make the connection error go away DO NOT CHANGE!!!!!!!!!!!!!!!!!!!!!
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// STRAVA AUTH ROUTES
// ==============
// Initial page redirecting to Strava
router.get('/stravaauth', isLoggedIn, function (req, res) {
	console.log("sending Strava Auth ..");
	res.redirect("https://www.strava.com/oauth/authorize?client_id=20249&response_type=code&redirect_uri=https://pembi-system-trackz.c9users.io/getauthcode&approval_prompt=force");
});


// Get auth code & exchange for access token
router.get('/getauthcode', isLoggedIn, function (req, res) {

async.waterfall([

	function(done) {
		console.log("authcode callback reached ...");
		var authCode = req.query.code;
		var errorcode = req.query.error;
		console.log("authtoken : " + authCode + " ; errorcode : " + errorcode);
	
		// check auth request response	
		if(errorcode == "access_denied"){
			console.log("errorcode");
			return;
		} else {
			console.log("Auth Code : " + authCode);
			done(null, authCode);
		}
	},


	// respond back to Strava with authcode to get accesstoken
	function(authCode, done) {
		console.log("get token reached ..." + authCode);

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
			}
				responseContent = JSON.parse(body);		//json.parse converts from string to javascript object
				console.log("responseContent 1 = " + responseContent);
				done(null, responseContent);
		});
	},
				
	function(responseContent, done) {
		// call function write athete to DB
		var loggedUser = req.user.id;
		saveAthlete(loggedUser, responseContent, function(id){
		console.log(id);
				// NEED TO DO ERROR HANDLING IF SAVE WAS A PROBLEM ... 

		console.log("responseContent 2  = " + responseContent);
		done(null, responseContent);
		
		});		// end of saveAthlete
	

	}


	], function (err, result) {		// result is the final value coming from last step
		if(err) {
			throw new Error(err);
		} else {
			console.log("Final result of the async chain of functions : " + result);		// result now equals 'done' as it has reached the end of async
			res.render("stravalinksuccess", { response: result });
		}
	});
	console.log("End of async");		// sits outside of async - will run immediately after async starts

});		// end of route


// FUNCTION : Write athete to DB
function saveAthlete(loggedUser, responseContent, cb) {
	console.log("reached save athlete");
	// console.log(responseContent.athlete.id);
	// console.log(loggedUser);

	// write info to DB - strava ID, access token, ???
	var cbVal = "";
	
    var sql = "UPDATE users SET stravaid=?, stravatoken=? WHERE id = ?";
    connection.query(sql, [ responseContent.athlete.id, responseContent.access_token, loggedUser ], function(err, rows) {
        if(err){
            console.log(err);
            cbVal = "error";
        } else {
        	cbVal = rows;
        }
        cb(cbVal);
    }); // end of save
}	// end of function


//=========================
// MIDDLEWARE
//=========================
// route middleware to make sure loggedIn
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
	}


module.exports = router;