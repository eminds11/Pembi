
// set up ======================================================================
// get all the tools we need
var http    	= require('http');
var express 	= require('express');
var session 	= require('express-session');
var	mysql   	= require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser	= require('body-parser');
var port    	= process.env.PORT || 8080;
var nodemailer	= require("nodemailer");
var passport	= require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var flash   	= require('connect-flash');
var async		= require("async");
var crypto		= require("crypto");


 // REQUIRE THE ROUTE FILES - now in /routes folder
// var userRoutes = require("./routes/users");

// connect to our database
require('./config/passport')(passport); // pass passport for configuration

// DATABASE CONNECTION
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'trackz',
  password : '',
  database : 'pembidb'
});
try {
	connection.connect();
} catch(e) {
	console.log('Database Connetion failed:' + e);
}
 
// SETUP EXPRESS APPLICATION
var app = express();
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash()); // use connect-flash for flash messages stored in session

// SETUP VIEW ENGINE
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + "/public"));

// SETUP PASSPORT
app.use(session({
	secret: 'mountainbiking',
	resave: false,
	saveUninitialized: false
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// define global variables
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.message = req.flash("error");
	next();
});

// ===========
// ROUTES
// ============

// app.use(userRoutes);	// User routes
require('./routes/users.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.use(require('./routes/strava.js'));
app.use(require('./routes/auth.js'));


// SET DEFAULT ROUTE (LANDING PAGE)
app.get('/', function (req, res) {
	console.log("req.user : " + req.user);
	res.render("index", { currentUser: req.user });
});

app.get('/about', function (req, res) {
	let username;
	if(req.user) {
		username = req.user; 
	} else {
		username = "";
	}
	req.flash('info', 'Flash message!!')
	res.render("about", { currentUser: username });
});

app.get('/skills', function (req, res) {
	res.render("skills");
});


app.get('/Q&A', function (req, res) {
	res.render("Q&A");
});

// Show all bike parks in table
app.get('/showParks', function (req, res) {
	connection.query('SELECT * from parks', function(err, rows) {
		if (!err){
	  		var response = [];
	 
			if (rows.length != 0) {
					response.push({'result' : 'success', 'data' : rows});
					res.render("showParks", {rows: rows}); // 2nd rows is now an array filled with the mysql query results
			} else {
					response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
	   	} else {
			res.status(400).send(err);
	  	}			
	});
});

app.get('/visitForm', isLoggedIn, function (req, res) {
	res.render("visitForm.ejs", { currentUser: req.user.first_name });
});


// POST to post a visit to the database
app.post("/logvisit", function(req, res){
    console.log("Back from visitForm"); // returns a JS object that will contain all of data from request body - coming from the form/input
    var parkVal = req.body.park; //newfriend is the NAME we gave to the <input> on the ejs page
							// bodyparser takes the request body and parse into JS object that we can access
    var userVal = req.user.id;
    var dateVal = req.body.date;
    var values = {park: parkVal, user: userVal, date: dateVal};
    console.log(values);
    var sql = "INSERT INTO visitslog SET ?";
    connection.query(sql, values, function(err, result) {
        	if(err){
        		console.log(err);
        	} else {
        		console.log("1 record inserted, ID: " + result.insertId);	

        	}
			    res.redirect("showVisitsbyUser/" + userVal);
		});
});


//GET specific park by ID
app.get('/showOnePark/:id', function (req, res) {
	// id is the number of the record that needs to be retreived
	var id = req.params.id;
	
		connection.query('SELECT * FROM parks WHERE id = ?', [id], function(err, rows, fields) {
  		if (!err){
  			var response = [];
 
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
				res.render("showOnePark", {rows: rows}); //1st rows is the variable being passed to ejs, second rows is the array in this file
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

// SHOW USER VISITS BY ID
app.get('/showVisitsbyUser/:id', function (req, res) {

	var userid = req.params.id;
    var sql = "SELECT visitslog.user, visitslog.date, parks.name, users.first_name, users.last_name FROM visitslog LEFT JOIN parks ON visitslog.park=parks.id LEFT JOIN users ON visitslog.user=users.id WHERE user = ?";

		connection.query(sql, [userid], function(err, rows, fields) {
  		if (!err){
  			var response = [];
 
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
console.log(rows[0]);
				res.render("showVisitsbyUser", { rows: rows, currentUser: req.user }); //1st rows is the variable being passed to ejs, second rows is the array in this file
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
  		} else {
		    res.status(400).send(err);
	  	}
	});
});

// SHOW USER VISITS BY ID
app.get('/showVisitsbyPark/:id', function (req, res) {
	var parkid = req.params.id;
    console.log("ParkID : " + parkid);
    var sql = "SELECT visitslog.park, visitslog.date, users.first_name, users.last_name, parks.name FROM visitslog LEFT JOIN users ON visitslog.user=users.id LEFT JOIN parks ON visitslog.park=parks.id WHERE park = ?";

		connection.query(sql, [parkid], function(err, rows, fields) {
  		if (!err){
  			var response = [];
 
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
				console.log(rows);
				res.render("showVisitsbyPark", {rows: rows}); //1st rows is the variable being passed to ejs, second rows is the array in this file
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
  		} else {
		    res.status(400).send(err);
	  	}
	});
});

app.get('/leaderboard', function (req, res) {

// var sql = "SELECT visitslog.park, visitslog.date, users.first_name, users.last_name, parks.name FROM visitslog LEFT JOIN users ON visitslog.user=users.id LEFT JOIN parks ON visitslog.park=parks.id";

// most visits by bikepark
// var sql = "SELECT park, COUNT(user) AS user FROM visitslog GROUP BY park ORDER BY user";


// most visits by user
	var sql = "SELECT user, COUNT(park) AS park FROM visitslog GROUP BY user ORDER BY park";
	connection.query(sql, function(err, rows) {
  		if (!err){
  			var response = [];
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows });
				console.log(rows[3].user);

				// rowjson.forEach(function(item, count){
				// 	console.log(count + " : " + rows[count].user);
				// 	var name = "piet";
				// 	response.push({'result' : 'success', 'data' : rows, "rows[count].user": name });
					
					
				// // });
				// console.log(response[5]);
				// res.render("leaderboard", { rows: response }); //1st rows is the variable being passed to ejs, second rows is the array in this file
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
  		} else {
		    res.status(400).send(err);
	  	}
	});		//end of connection.query
	
});		// end of app.get

//=============
//COMMENT ROUTES WILL GO HERE
//=============


// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
		return next();
	} else {
		// if they aren't redirect them to the home page
		req.flash("info", "Please Login First!");
		res.redirect("/");
		}
	}


// ===========
// CREATE SERVER

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Pembi Server has started!"); 
});
