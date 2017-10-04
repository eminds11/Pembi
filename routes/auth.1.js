// auth.js
// files for setting up Strava Oauth2 process

// EXPRESS SETUP
//==============
'use strict';
const express			      = require('express');
const simpleOauthModule	= require('simple-oauth2');
var router				      = express.Router();

const app = express();
const oauth2 = simpleOauthModule.create({
  client: {
    id: "20249",
    secret: '2d8f781d16bb0a5196b725b98eac2b893ab3a10b',
  },
  auth: {
    tokenHost: 'https://www.strava.com',
    tokenPath: '/oauth/token',
    authorizePath: '/oauth/authorize',
  },
});

// Authorization uri definition
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'https://pembi-system-trackz.c9users.io/tokenexchange',
  // scope: "notifications",
  state: '3(#0/!~'
});

// AUTH ROUTES
//==============

// Initial page redirecting to Github
router.get('/auth', (req, res) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);     // request auth code
});

// Callback service parsing the authorization token and asking for the access token
router.get('/tokenexchange', (req, res) => {
  const code = req.query.code;
  const options = {
    code,
  };
  console.log(code);

  oauth2.authorizationCode.getToken(options, (error, result) => {     // request access token
    if (error) {
      console.error('Access Token Error', error.message);
      return res.json('Authentication failed');
    }

    console.log('The resulting token: ', result);
    const token = oauth2.accessToken.create(result);      // receive access token -> store in user table

    return res
      .status(200)
      .json(token);
  });
});

router.get('/success', (req, res) => {
  res.send('');
});

router.get('/', (req, res) => {
  res.send('Hello<br><a href="/auth">Log in with Strava</a>');
});



module.exports = router;