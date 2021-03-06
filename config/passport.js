// config/passport.js

// load all the things we need

var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-signup',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user/email trying to login already exists
            connection.query("SELECT * FROM users WHERE email = ?",[email], function(err, rows) {
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('error', 'That email is already taken.'));
                } else {
                    // if there is no user with that email
                    // create the user

                    var newUserMysql = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
                        password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
                    };
                    console.log(newUserMysql.date);
                    var insertQuery = "INSERT INTO users ( first_name, last_name, email, password, datecreated ) values (?,?,?,?,?)";
                    connection.query(insertQuery,[newUserMysql.firstname, newUserMysql.lastname, newUserMysql.email, newUserMysql.password, newUserMysql.date ], function(err, rows) {
                        if(err){
                            console.log(err);
                        } else {
                            newUserMysql.id = rows.insertId;
                            return done(null, newUserMysql, req.flash('success', 'Success! Welcome to the Pembi website!'));
                        }
                    });
                }
            });
        })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            connection.query("SELECT * FROM users WHERE email = ?",[email], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('error', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('error', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, rows[0], req.flash('success', 'Logged in! Welcome back!'));
            });
        })
    );
};