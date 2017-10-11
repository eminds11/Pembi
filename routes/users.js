
var express = require("express");
var passport = require("passport");

var async		= require('async');
var crypto		= require('crypto');
var nodemailer	= require('nodemailer');
var bcrypt		= require('bcrypt-nodejs');

// !!!!!!!!!!the 4 rows below are required to make the connection error go away DO NOT CHANGE!!!!!!!!!!!!!!!!!!!!!
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

// STRAVA ROUTES START HERE

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});


	// =====================================
	// AUTH ROUTES
	// =====================================

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.ejs');	// { message: req.flash('loginMessage') }
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
			res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// FORGOT PASSWORD ==============================
	// =====================================
	// show the forgot form
	app.get('/forgot', function(req, res) {
		res.render('forgot.ejs'); //{ message : req.flash("error") }
	});
	
	// process the forgot form
	app.post('/forgot', function(req, res) {
		async.waterfall([

	// crypto creates the token to be sent via the email
	    function(done) {
	    	console.log("reached crypto token function");

	      crypto.randomBytes(20, function(err, buf) {
	        var token = buf.toString('hex');
	        done(err, token);
	      });
	    }, // end of f(done)
	    
	// verifies the email provided exists and if so, save the token against the user in the DB, exit with user info in rows array
		// =============================

		function(token, done) {
		    var sql = "SELECT * FROM users WHERE email = ?";
		    connection.query(sql, [req.body.email], function(err, user) {		// verify if user exists
				if (err) { return done(err); }
				if (!user.length) {
					console.log("user does not exist");
					req.flash('error', 'No account with that email address exists.');
	        		return res.redirect('/forgot');
	        	}

		// save token against user in DB
		console.log(user); // object
		console.log(user[0]);  // element in array
		var User = user[0];
		console.log(User.email);

			var newToken = token;
			var newExpiry = (Date.now() + 3600000); // 1 hour
            var sql = "UPDATE users SET resetPasswordToken=?, resetPasswordExpires=? WHERE email = ?";
            connection.query(sql, [ newToken, newExpiry, req.body.email ], function(err, rows) {
                if(err){
                    console.log(err);
                }
				console.log("token saved to DB : " + token);
    			done(err, token, rows);
		        }); // end of save
			}); // end of connection.query
	    }, // end of function to check if user exists & get email
	    
	    // generate and send the email
		// =============================
		function(token, user, done) {
	    	console.log("reached send reset mail function");
	    	
		      var smtpTransport = nodemailer.createTransport({
		        service: 'Gmail', 
		        auth: {
		          user: 'pembiorg@gmail.com',
		          pass: "P@ssw0rd11"
		        }
		      });
		      var mailOptions = {
		        to: user.email,
		        from: 'pembiorg@gmail.com',
		        subject: 'Node.js Password Reset',
		        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
		          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
		          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
		          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
		      };
		      smtpTransport.sendMail(mailOptions, function(err) {
		        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
		        console.log('mail sent');
		        done(err, 'done');
		      });
			}	// end of send mail function
			], function(err) {
		    if (err) res.redirect('/forgot');
		 }); // end of async
	}); // end of app.post


	// =====================================
	// RESET PASSWORD ==============================
	// =====================================
	// show the reset form
	app.get('/reset/:token', function(req, res) {	
							// before calling reset form - first check if token still valid

		    var sql = "SELECT * FROM users WHERE resetPasswordToken = ?";
		    connection.query(sql, [req.params.token], function(err, user) {		// verify if user exists
				if (err) { res.send(err); }
				if (!user.length) {
					console.log("No acount for that token - does not exist.");
					req.flash('error', 'Invalid reset token!');
	        		return res.redirect('/forgot');
	        	} else {

				if(user[0].resetPasswordExpires < Date.now()){				// verify if token still valid
					console.log("token has expired");
					req.flash('error', 'Token has expired.');
					return res.redirect('back');
	        	}
		    
	        	console.log("User Exists & token still valid. Render the RESET form.");
				}
				
			res.render("reset", {user: "doc", token: req.params.token});
		  });
	});
		    

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	// process the reset form
	app.post('/reset/:token', function(req, res) {
		console.log("RESET form completed - back at POST. Received from Reset Form - newPassword : " + req.body.password + " Token: " + req.params.token);
	
	  async.waterfall([
	
	// AGAIN ... search for token, check if time still valid, see if time now is > time from token expire, then return user info
	    function(done) {

		    var sql = "SELECT * FROM users WHERE resetPasswordToken = ?";
		    connection.query(sql, [req.params.token], function(err, user) {		// verify if user exists
				if (err) { return done(err); }
				if (!user.length) {
					console.log("No acount for that token - does not exist");
					req.flash('error', 'No acount for that token - does not exist!');
	        		return res.redirect('/forgot');
	        	}
	        	console.log("User Exists : " + user[0].resetPasswordExpires);
	        	console.log("Date now : " + Date.now());
				if(user[0].resetPasswordExpires < Date.now()){				// verify if token still valid
					console.log("token has expired");
					req.flash('error', 'Reset token has expired! ');
					return res.redirect('back');
				} else {

// TBD - confirm both passwords are the same
	
			// Write new password to DB
				console.log("token still valid for : "+ user[0].email);

				var newPassword = bcrypt.hashSync(req.body.password, null, null)  // use the generateHash function in our user model
				var newToken	= undefined;
				var newExpiry	= undefined;
				var userMail	= user[0].email;
	            var sql = "UPDATE users SET password=?, resetPasswordToken=?, resetPasswordExpires=? WHERE email = ?";
	            connection.query(sql, [ newPassword, newToken, newExpiry, userMail ], function(err, rows) {
	                if(err){
	                    console.log(err);
	                }
					// need to login user with newpw
					console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
					var User = user[0];
					console.log(User.email + " : newpassword : " + req.body.password);
					
					req.logIn(User, function(err) {			// passport.js function to login user
	            	done(err, User);
	        		});				
			    }); // end of save
				}
	      });
	    },

		// send mail to user to confirm new password
		
	    function(user, done) {
	    	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Reached Confirm New Password mail function");

	    //   var smtpTransport = nodemailer.createTransport('SMTP', {
	    //     service: 'SendGrid',
	    //     auth: {
	    //       user: '!!! YOUR SENDGRID USERNAME !!!',
	    //       pass: '!!! YOUR SENDGRID PASSWORD !!!'
	    //     }
	    //   });
	    //   var mailOptions = {
	    //     to: user.email,
	    //     from: 'passwordreset@demo.com',
	    //     subject: 'Your password has been changed',
	    //     text: 'Hello,\n\n' +
	    //       'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
	    //   };
	    //   smtpTransport.sendMail(mailOptions, function(err) {
	    //     req.flash('success', 'Success! Your password has been changed.');
	    //     done(err);
	      //});
	       res.redirect('/profile');
	    } // end of send mail function
	    
	  ], function(err) {
	    if(err){console.log(err)} else{ res.redirect('/'); }
	  });
	});



	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		req.flash("success", "Logged you out!");
		res.redirect('/');
	});
	

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	req.flash("error", "Please Login First!");
	res.redirect('/login');
	}


}