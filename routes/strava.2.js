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
// TEST async

// router.get('/cbtest', function (req, res) {
// 	async.waterfall([
	    
// 	    function (done) {
// 			console.log("Step 0");
// 	        done(null);
// 	    },

// 	    function (done) {
// 			console.log("Step 1" );
// 	        done(null, 'one', 'two');
// 	    },
	    
// 	    function(arg1, arg2, done) {
// 			console.log("Step 2 : " + arg1 + arg2);
// 			var caption = arg1 + arg2;
// 	        // arg1 now equals 'one' and arg2 now equals 'two'
// 	        done(null, caption);
// 	    },
	    
// 	    function(cap2, done) {
// 			console.log("Step 3 : " + cap2);  // arg1 now equals 'three'
// 	        done(null, 'done now : ' + cap2);
// 	    }
	    
// 	], function (err, result) {
// 		if(err) {
// 			throw new Error(err);
// 		} else {
// 			console.log(result);		// result now equals 'done' as it has reached the end of async
// 		}
// 	});
	
// 	console.log("End of async");
// 	res.render("index");
// });



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

router.get('/getstarted', function (req, res) {
	res.render("getstarted");
});

// Routes to enable user to link Pembi to Strava account
//=========================
router.get('/stravalink', function (req, res) {
	res.render("stravalink");
});

router.get('/stravalinksuccess/:id', function (req, res) {
  	let athleteResult = "";
  	let body = "";
  	var result = "";

	var athlete = req.params.id;
	var accessToken = "2d8f781d16bb0a5196b725b98eac2b893ab3a10b";
	var url = "https://www.strava.com/api/v3/activities/${activity}?access_token=${accessToken}";
	
	request("https://www.strava.com/api/v3/athletes/194278?access_token=2d8f781d16bb0a5196b725b98eac2b893ab3a10b", function (err, response, body) { // response is the message detail, body is the callback data
	  if(err){
	    console.log('error:', err);
	  } else {
	  	let athleteResult = JSON.parse(body); // convert JSON (returned in "body") to a JavaScript Object
//FOR LATER REFERENCE	  	var result = athleteResult.clubs[1].name;

// save user's Strava ID to DB

	    res.render("stravalinksuccess", { result: athleteResult });
	  }
	});
});


// Routes to enable user to link Pembi to Strava account
//=========================
// app.post .... to strava, callback ... strava result ... res.redirt (success {result})

router.get('/getactivity/:id', function (req, res) {
  	let body = "";

	async.waterfall([
		
	// STEP 1. Get activity details from Strava API
	function(done){
	  	let activityResult = "";
	  	
		var activity = req.params.id;
		var accessToken = "2d8f781d16bb0a5196b725b98eac2b893ab3a10b";
		var url = "https://www.strava.com/api/v3/activities/${activity}?access_token=${accessToken}";
		request("https://www.strava.com/api/v3/activities/1158498290/?access_token=2d8f781d16bb0a5196b725b98eac2b893ab3a10b", function (err, response, body) {
		  if(err){
		    console.log('error:', err);
		    return;
		  } else {
		  	var activityResult = JSON.parse(body);
		  	console.log(activityResult.segment_efforts.length);
		  	done(null, activityResult);
		  }
		});	// end of API request
	}, //end of function
		

   // STEP 2. Compare jsonsegments with parksegments
	function(activityResult, done){
		var rows = [];
		var jsonSegments = [];
		var parksVisited = [];

 		for(var i = 0; i < activityResult.segment_efforts.length; i++){
			var jsonid = activityResult.segment_efforts[i].id;
			jsonSegments.push(jsonid);
 		}

	// declare function compare
	
		function compare(jsonsegments, done){
			jsonSegments.forEach(function(item){
		 			var sql = "SELECT * FROM parksegments WHERE segment = ?";
					connection.query(sql, [ item ], function(err, rows) {
				  		if (err){
				  			console.log(err);
				  		} else {
							if (rows.length != 0) {
								var parkid = rows[0].park;
								parksVisited.push(parkid);			
								console.log("Park ID : " + parkid);
								console.log(parksVisited);
							} else {
								console.log(item + " : no match");
							}	// end of if
				  		}
					});	// end of connection.query
				});	// end of forEach
			console.log("comparison complete");
			console.log(parksVisited);
			done(parksVisited);
		}	// end of function compare
	
	// call function compare		
			compare(jsonSegments);

	}, //end of function STEP 2


	// STEP 3. Write parks visited to DB, redirect to myDashboard
	function(parksVisited, done){
		console.log("reached next function");	
	},


	], function (err, result) {			// end of async, now handle if err
		console.log("Async error : " + err + " : " + result);
	});
	   	res.render("athleteactivity", {});

	
});		// end of route


router.get('/athleteactivity', function (req, res) {
console.log("reached athlete activity");
	res.render("athleteactivity");
});


module.exports = router;