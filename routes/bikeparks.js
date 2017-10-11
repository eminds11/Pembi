
var express = require("express");
var router = express.Router();
var passport = require("passport");



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




router.get('/bikeparkchallenge', function (req, res) {
	res.render("bikeparkchallenge");
});



module.exports = router;

