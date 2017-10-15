
var express = require("express");
var router = express.Router();
var passport = require("passport");

// !!!!!!!!!!the 4 rows below are required to make the connection error go away DO NOT CHANGE!!!!!!!!!!!!!!!!!!!!!
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// ROUTES START HERE
//==================
router.get('/', function (req, res) {
	console.log("req.user : " + req.user);
	res.render("index", { currentUser: req.user });
});

router.get('/about', function (req, res) {
	let username;
	if(req.user) {
		username = req.user; 
	} else {
		username = "";
	}
	req.flash('info', 'Flash message!!')
	res.render("about", { currentUser: username });
});

router.get('/skills', function (req, res) {
	res.render("skills");
});

router.get('/Q&A', function (req, res) {
	res.render("Q&A");
});


//GET Strava segments by park by ID
router.get('/showSegments/:id', function (req, res) {
	// id is the number of the record that needs to be retreived
	var id = req.params.id;
	
		connection.query('SELECT * FROM parksegments WHERE park = ?', [id], function(err, rows, fields) {
  		if (!err){
  			var response = [];
 
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
				res.render("showSegments", {rows: rows}); //1st rows is the variable being passed to ejs, second rows is the array in this file
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			// res.setHeader('Content-Type', 'application/json');
	    	// res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});




router.get('/bikeparkchallenge', function (req, res) {
	res.render("bikeparkchallenge");
});



module.exports = router;

