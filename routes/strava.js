// strava.js
// Strava webhooks, subscribtions, segment comparisons

var express 	= require('express');
var router		= express.Router();
var request 	= require('request');
var async		= require('async');

// !!!!!!!!!!the 4 rows below are required to make the connection error go away DO NOT CHANGE!!!!!!!!!!!!!!!!!!!!!
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// STRAVA ROUTES
//==============

router.get('/getstarted', function (req, res) {
	res.render("getstarted");
});

// Routes to enable user to link Pembi to Strava account
//=========================
router.get('/stravalink', function (req, res) {
	res.render("stravalink");
});


router.get('/stravalinksuccess', function (req, res) {
	console.log("strava link success reached");
	console.log(req.query);

// save user's Strava ID to DB
	req.flash('success', 'Strava linked successfully! Start riding!');
	res.render("stravalinksuccess");
});


//=========================
// API : WEBHOOKS
//=========================
// SIMULATE  to simulate SEND the webhook from Strava
router.get('/webhookTEST', function (req, res) {
	
	console.log("starting webhook send ...");
	var webhookjson = {
	  "subscription_id": "1",
	  "owner_id": 194278,
	  "object_id": 1208278244,
	  "object_type": "activity",
	  "aspect_type": "create",
	  "event_time": 1297286541
	};

   var options = {
     url: "https://pembi-system-trackz.c9users.io/webhook/", 
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     json: webhookjson
   };

	request(options, function(err, res, body) {
		if(err){
			console.log('error:', err);
		} else {
			if (res && (res.statusCode === 200 || res.statusCode === 201)) {
	    		console.log(body)
			}
		}
   });		//end of request
});


// function to RECEIVE the webhook from Strava
router.post('/webhook', function (req, res) {

	res.sendStatus(200);	// acknowledge success back to Strava

	// find Pembi user & activity details, pass on to getactivity
	console.log("Subscribed Activity Received from Strava : ");
	console.log("user : " + req.body.owner_id);
	console.log("activity : " + req.body.object_id);

	logWebhook(req.body, function(req, res){
		console.log("Back from logWebhook");
	});

	getActivity1(req.body, function(req, res){
		console.log("Back from getactivity !!!");
	});

});


//=========================
// API : SUBSCRIPTIONS
//=========================
// STEP 1. Pembi.org trigger create subscription to Strava
router.get('/createsubscription', function (req, res) {
	
	console.log("Step 1 : PEMBI SERVER : Create & sending subscription request");

	var jsonVar = {
	  "client_id": 20249,
	  "client_secret": "405fa022a069863c438a49429d8d2c37c3be10b4",
	  "object_type": "activity",
	  "aspect_type" : "create",
	  "callback_url": "https://pembi-system-trackz.c9users.io/webhook",
	  "verify_token": "STRAVA"
	};

   var options = {
     url: "https://api.strava.com/api/v3/push_subscriptions?client_id=20249&client_secret=405fa022a069863c438a49429d8d2c37c3be10b4&object_type=activity&aspect_type=create&callback_url=https://pembi-system-trackz.c9users.io/webhook&verify_token=STRAVA",
     method: 'POST',
   };

	request(options, function(err, res, body) {
		if(err){
			console.log('error:', err);
		} else {
			if (res && (res.statusCode === 200 || res.statusCode === 201)) {
	    		console.log(body)
			}
		}
   });		//end of request
});

// Step 2. Receive Strava validation request, send JSON response
router.get('/webhook', function (req, res) {

	console.log("Step 2 : PEMBI SERVER : Strava validation request received, sending back token");
	var hubchallenge = req.query["hub.challenge"];
	console.log(hubchallenge);

	res.status(200).json({ "hub.challenge": hubchallenge });
});


//=========================
// FUNCTIONS
//=========================

// Log webhook to database
//------------------------
function logWebhook(inputFile, callback){
	console.log("Reached logWebhook");

	let activityDate = new Date(inputFile.event_time * 1000);
	var values = { user: inputFile.owner_id, activity: inputFile.object_id, date: activityDate };
    var sql = "INSERT INTO logwebhooks SET ?";
	connection.query(sql, values, function(err, rows) {
  		if (err){
  			console.log(err);
  			callback(err);
  		} else {
				console.log(rows);
				callback();
		}
	});	// end of connection.query		
}


// Get segments and save to database
//----------------------------------
function getActivity1(inputFile, callback){
	
	async.waterfall([

	// STEP 0 : Get user access token from DB
	function Zero(done){

	console.log("Reached logWebhook");

	 	var sql = "SELECT * FROM users WHERE stravaid = ?";
		connection.query(sql, [ inputFile.owner_id ], function(err, rows) {
	  		if (err){
	  			console.log(err);
	  			done(err);
	  		} else {
				if (rows.length != 0) {
					var stravatoken = rows[0].stravatoken;
					var userid = rows[0].id;
					console.log("userid : " + userid);
					done(null, stravatoken, userid)
				} else {
				}	// end of if
	  		}
		});	// end of connection.query		
	},
	

	// STEP 1. Get activity file from Strava, extract details from Strava webhook & write to JSON
	function One(stravatoken, userid, done){
		console.log("STEP 1 : GET JSON from Strava file");

		// build the url query
		var request_params = {
		  "access_token": stravatoken
		};

		var paramlist = [];
		for (var pk in request_params) {
			paramlist.push(pk + "=" + request_params[pk]);
		};
		var body_string = inputFile.object_id + "?" + paramlist.join("&");
		console.log(body_string);
		
		var request_details = {
		method: "GET",
		url: "https://www.strava.com/api/v3/activities/" + body_string
		};

		var responseContent;
		request(request_details, function(err, res, body) {
			if(err){
				console.log('error:', err);
				return;
			} else {
				responseContent = JSON.parse(body);		//json.parse converts from string to javascript object
				// console.log("responseContent 1 = " + responseContent);
				done(null, responseContent, userid);
			}
		});
	}, //end of function


   //STEP 2. Compare jsonsegments with parksegments
	function(activityResult, userid, done){
		console.log("STEP 2 : compare segments");
		var rows = [];
		var jsonSegments = [];
		var parksVisited = [];

		var adate = activityResult.start_date_local;
		console.log(adate);
		let bdate = new Date(adate).toLocaleDateString();
		console.log(bdate);
		let cdate = new Date(adate).toISOString().slice(0, 19).replace('T', ' ');
		console.log(cdate);
		console.log("++++++++++++++++++++++++++++++++++++++++++");


		// Build a JSON array of activity segments to use to compare with parksegments
 		for(var i = 0; i < activityResult.segment_efforts.length; i++){
			var jsonsegment = activityResult.segment_efforts[i].segment.id;
			// var jsondate = activityResult.segment_efforts[i].start_date;
			jsonSegments.push(jsonsegment);
 		}

		// Function to compare activity segments with parksegments 
		function compare (item, counter, array){
			// console.log(item, counter);
		
	 		var sql = "SELECT * FROM parksegments WHERE segment = ?";
			connection.query(sql, [ item ], function(err, rows) {
		  		if (err){
		  			console.log(err);
		  			done(err);
		  		} else {
					if (rows.length != 0) {
						var parkid = rows[0].park;
						parksVisited.push({ "park": parkid });
						console.log(parksVisited);
					} else {
					}	// end of if
		  		}
			});	// end of connection.query
		}		// end of compare

		jsonSegments.forEach(compare);
		
//!!!!!!!!!!!sonewhere here extract the unique elemnets from the array - in case multiple parks visited


// REFACTOR REQUIRED! this function delays done() while the compare function runs		
		setTimeout(function(){
			let activityDate = new Date(activityResult.start_date_local).toISOString().slice(0, 19).replace('T', ' ');
			console.log("Step 2 compare complete!");
		done(null, parksVisited, activityDate, userid);		// if no done() then async gets STUCK here!!!
		}, 3000)

	}, //end of function STEP 2


	// STEP 3. Write parks visited to visitslog, redirect to myDashboard
	function(parksVisited, activityDate, userid, done){
		console.log("STEP 3 start");
		console.log("userid : " + userid);

		if(parksVisited !=0){
			var userVal = userid;
		    var values = {park: parksVisited[0].park, user: userVal, date: activityDate};
		    var sql = "INSERT INTO visitslog SET ?";
		    connection.query(sql, values, function(err, result) {
		        	if(err){
		        		console.log(err);
		        	} else {
		        		console.log("1 record inserted, ID: " + result.insertId);
		        	}
				});
			
		} else {
			console.log("No segment of a bike park covered.");
		}

		done(null, "STEP 3 completed  ... visitslog updated with date, user, park : " );
	}, // end of STEP 3


	], function (err, result) {		// result is the final value coming from last step of async
		if(err) {
			throw new Error(err);
		} else {
			console.log("Final result of the async chain of functions : " + result);		// result now equals 'done' as it has reached the end of async
			callback();
		}
	});
	console.log("End of async");		// sits outside of async - will run immediately after async starts
}



//=========================
// MIDDLEWARE
//=========================
// route middleware to make sure loggedIn
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	req.flash("error", "Please Login First!");	
	res.redirect('/login');
	}

module.exports = router;