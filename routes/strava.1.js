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
		
	// STEP 0. Get activity details from Strava API
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
		
	// // STEP 1. create a TEMP table for activity segments
	// 	function(done){
	// 	connection.query("CREATE TABLE jsonsegments (segment varchar(20))", function(err, res) {
 //       	if(err){
	//         	console.log(err);
	//         	done(err, null);		// callback the error and null as no result
	//         	return;					// use return in the guard statement to exit the function and prevent any further execution
	//         }
	// 			console.log("table created");
	//         }); // end of connection.query			
	// 	}, //end of function

 //  // STEP 2. write JSON into TEMP TABLE
	// 	function(activityResult, done){
	//  		for(var i = 0; i < activityResult.segment_efforts.length; i++){
	//  			var insertJSON = activityResult.segment_efforts[i].id;
	//  			var sql = "INSERT INTO jsonsegments (segment) VALUES (?)";
	// 			connection.query(sql, [ insertJSON ], function(err) {
	//         	if(err){
	// 	        	console.log(err);
	// 	        	done(err, null);
	// 	        	return;
	// 	        }
	// 	        				// if a callback is used it will be done(null, value)  ---> null cause there's no error to return
	// 	        				// if no method is called, ie no error check required, then the callback doesn't need error handling
	// 	        }); // end of connection.query
	//  		}	// end of FOR loop
	// 		console.log("COMPLETED : json written into jsonsegments");
	// 		done(null);
	// 	}, //end of function

   // STEP 3. Compare jsonsegments with parksegments
		function(activityResult, done){
			var rows = "";
			var jsonSegments = [];
			var parksVisited = [];

	 		for(var i = 0; i < activityResult.segment_efforts.length; i++){
				var jsonid = activityResult.segment_efforts[i].id;
				jsonSegments.push(jsonid);
	 		}

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
							// done(null, parkid);
						} else {
							console.log(item + " : no match");
						}	// end of if
			  		}
				});	// end of connection.query
			})	// end of forEach
			console.log("comparison complete" + parksVisited);
			done(null, parksVisited);
		}, //end of function


	function(parksVisited, done){
		console.log(" has visited park : " + parksVisited);	
	},


	 	// 	for(var i = 0; i < activityResult.segment_efforts.length; i++){
	 	// 		console.log(i);
	 	// 		var jsonsegment = activityResult.segment_efforts[i].id;
	 	// 		console.log(jsonsegment);
	 	// 		var sql = "SELECT * FROM parksegments WHERE segment = ?";
			// 	connection.query(sql, [ jsonsegment ], function(err, rows) {
			//   		if (err){
			//   			console.log(err);
			//   		} else {
			//   			var response = [];
			// 			if (rows.length != 0) {
			// 				// response.push({'result' : 'success', 'data' : rows});
			// 				console.log(rows);
			// 				// return res.redirect("/", {rows: rows});
			// 			} else {
			// 				console.log(i + " : no match");
			// 				// response.push({'result' : 'error', 'msg' : 'No Results Found'});
			// 			}	// end of if
			//   		}
			// 	});	// end of connection.query
			// }	// end of FOR looping over jsonsegment array
			// console.log("COMPLETED : comparison completed : " + rows);
			// done();



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