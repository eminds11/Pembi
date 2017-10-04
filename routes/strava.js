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
	res.render("strava/getstarted");
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
	res.render();
});


// Routes to getactivity once webhook triggered
//=========================
router.get('/getactivity', function (req, res) {

	async.waterfall([
		
	// STEP 1. Get activity details from Strava API
	function(done){
		console.log("STEP 1 : GET JSON from Strava");
		var json = req.body;
		console.log("JSON received from Strava : " + json);
		
	  	let activityResult = "";
		var activity = req.params.id;
		var accessToken = "2d8f781d16bb0a5196b725b98eac2b893ab3a10b";
		var url = "https://www.strava.com/api/v3/activities/${activity}?access_token=${accessToken}";
		request("https://www.strava.com/api/v3/activities/1158498290/?access_token=2d8f781d16bb0a5196b725b98eac2b893ab3a10b", function (err, response, body) {
		  if(err){
		    console.log('error:', err);
		    done(err);
		  } else {
		  	var activityResult = JSON.parse(body);
		  	// console.log(activityResult.segment_efforts[0].segment.id);
		  	done(null, activityResult);
		  }
		});	// end of API request
	}, //end of function
		

   // STEP 2. Compare jsonsegments with parksegments
   
	function(activityResult, done){
		// console.log("STEP 2 : compare segments");
		var rows = [];
		var jsonSegments = [];
		var parksVisited = [];

 		for(var i = 0; i < activityResult.segment_efforts.length; i++){
			var jsonsegment = activityResult.segment_efforts[i].segment.id;
			var jsondate = activityResult.segment_efforts[i].start_date;
			jsonSegments.push(jsonsegment);
 		}

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
						parksVisited.push({ "park": parkid, "date": jsondate });
						console.log(parksVisited);
					} else {
					}	// end of if
		  		}
			});	// end of connection.query
		}

		jsonSegments.forEach(compare);
		
			setTimeout(function(){
				console.log("Step 2 compare complete!");
			done(null, parksVisited);		// if no done() then async gets STUCK here!!!
			}, 3000)
		
 		
		// jsonSegments.forEach(function(item, done){
	 //			var sql = "SELECT * FROM parksegments WHERE segment = ?";
		// 		connection.query(sql, [ item ], function(err, rows) {
		// 	  		if (err){
		// 	  			console.log(err);
		// 	  			done(err);
		// 	  		} else {
		// 				if (rows.length != 0) {
		// 					var parkid = rows[0].park;
		// 					parksVisited.push(parkid);
		// 					console.log(parksVisited);
		// 				} else {
		// 						console.log(item + " : no match");
		// 				}	// end of if
		// 	  		}
		// 		});	// end of connection.query
		// 	});	// end of forEach
		// 	console.log("comparison complete");
		// 	console.log(parksVisited);
		// done(null, parksVisited);	// end of STEP 2 - return for STEP 3 -> date, park visited

	}, //end of function STEP 2


	// STEP 3. Write parks visited to DB, redirect to myDashboard
	function(parksVisited, done){
		console.log("STEP 3 start");

		if(parksVisited !=0){
			var userVal = req.user.id;
		    var values = {park: parksVisited[0].park, user: req.user.id, date: parksVisited[0].date};
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
			return;
		}

		done(null, "STEP 3 completed  ... visitslog updated with date, user, park : " );
	},


	], function (err, result) {		// result is the final value coming from last step
		if(err) {
			throw new Error(err);
		} else {
			console.log("Final result of the async chain of functions : " + result);		// result now equals 'done' as it has reached the end of async
			res.redirect("showVisitsbyUser/" + req.user.id);
		}
	});
});		// end of route


//=========================
// STRAVA API TESTS
//=========================

//=========================
// API : WEBHOOKS
//=========================
// SIMULATE  to simulate SEND the webhook from Strava
router.get('/webhookxxx', function (req, res) {
	
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

	function useStravaData(data){
		var data1 = JSON.parse(data);
		console.log("reached function : " + data1);
		console.log("athlete : " + data1.owner_id);
		console.log("activity : " + data1.object_id);
	};

// function to RECEIVE the webhook from Strava
router.post('/webhook', function (req, res) {
	
	res.sendStatus(200);	// acknowledge success back to Strava

	console.log("Subscribed Activity Received from Strava : ");
	console.log(req.body);

	useStravaData( { acvitiyData : req.body} );

// 	// post activity data to visitslog
	
// 	var date = new Date(req.body.event_time * 1000);
// 	// var date = new Date(Date.UTC(2012, 0, 20, 21, 33, 22));
// 	console.log(date.toUTCString());

// // MAY NEED TO CALL A FUNCTION HERE - NOT A ROUTE
// //getactivitydetails(); - run async inside that activcity detaukls not a route ... just a function

//     var values = { park: "22", user: req.body.owner_id, date: req.body.event_time };
//     console.log(values);
//     var sql = "INSERT INTO visitslog SET ?";
//     connection.query(sql, values, function(err, result) {
//         	if(err){
//         		console.log(err);
//         	} else {
//         		console.log("1 record inserted, ID: " + result.insertId);	
//         	}
// 		});
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
router.get('/webhookTEMP', function (req, res) {

	console.log("Step 3 : PEMBI SERVER : Strava validation request received, sending back token");
	var hubchallenge = req.query["hub.challenge"];
	console.log(hubchallenge);

	res.status(200).json({ "hub.challenge": hubchallenge });
});


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