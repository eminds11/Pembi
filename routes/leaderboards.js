// LEADERBOARDS
// Principles:
// - Always use visitslog table as the master source for leaderboards
// - Rather build from visitslog everytime than update leaderboard during logvisits function
// - First attempt use permanent tables, for second attempt use temp tables
// Leaderboard1 : most visits by users to bike parks
// Leaderboard2 : most visits tobike parks by bike park  


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


// LEADERBOARD ROUTES
// ==================

// Leaderboard : Most visits by user
router.get('/leaderboard1', function (req, res) {
	console.log("reached leaderboard1");

async.waterfall([
	// var sql = "SELECT visitslog.park, visitslog.date, users.first_name, users.last_name, parks.name FROM visitslog LEFT JOIN users ON visitslog.user=users.id LEFT JOIN parks ON visitslog.park=parks.id";
	// most visits by bikepark
	// var sql = "SELECT park, COUNT(user) AS user FROM visitslog GROUP BY park ORDER BY user";
	
	// STEP 1 : Check if leaderboard1 table exists, drop lb1 else create lb1
	function One(done){
		var sql = "DROP TABLE IF EXISTS leaderboard1";
		connection.query(sql, function(err, rows){
			if(err){
				console.log("error");
			} else {
				// create table
				console.log("table dropped");
				connection.query("CREATE TABLE leaderboard1 (user varchar(10), park varchar(10), first_name varchar(50), last_name varchar(50))", function(err, res) {
					if(err){
						console.log(err);
						}
						console.log("STEP 1 : leaderboard1 table created");
						done(null, "Step 1 output")
				}); // end of create table
			}
		});		// end of drop & create leaderboard table
	},

	// STEP 2 : Select from vistslog and insert result into leaderboard 1
	function Two(abc, done){
		console.log("STEP 2 : Convert visitslog -> leaderbooard : " + abc);
		var sql = "SELECT user, COUNT(park) AS park FROM visitslog GROUP BY user ORDER BY park DESC";
		connection.query(sql, function(err, rows) {
			if(err){
				console.log(err);
				res.status(400).send(err);
			} else {
				console.log("Leader query returned : " + rows.length);
				rows.forEach(function(element, count){
					var values = { park: rows[count].park, user: rows[count].user };
					var sql = "INSERT INTO leaderboard1 SET ?";
					connection.query(sql, values, function(err, result) {
						if(err){
							console.log(err)
						}
					})
				})
			}
			done(null, rows);
		})	// end of query
	},	// end of function

	// join leaderboard 1 with users table
	function Three(rows, done) {
		console.log("STEP 3 : Join tables for final query");
		var sql = "SELECT leaderboard1.park, users.first_name, users.last_name FROM leaderboard1 LEFT JOIN users ON leaderboard1.user=users.id";
		connection.query(sql, function(err, rows) {
			if(err){
				console.log(err)
			} else {
				done(null, rows);
			}
		})
	}		// end of function Four

	], function (err, result) {		// result is the final value coming from last step
		if(err) {
			throw new Error(err);
		} else {
			console.log("Final result of the async chain of functions : " + result);		// result now equals 'done' as it has reached the end of async
			res.render("leaderboard", { rows: result });
		}
	});
	console.log("End of async");		// sits outside of async - will run immediately after async starts		
	});		// end of router.get
	


	router.get('/leaderboard2', function (req, res) {
		console.log("reached leaderboard2");
	});		// end of router.get
	

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