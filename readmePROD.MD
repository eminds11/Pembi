What to Change for PROD Version:
================================

- [x]Listening port to 80
- [x]change in app.js

DATABASE CONFIG
- [x]change in app.js + config
    'host': 'localhost',
    'user': 'carl',
    'password': '***'

Strava API callback uri & url
- [x]change callback url on https://www.strava.com/settings/api
    DEV ---> pembi-system-trackz.c9users.io
    PROD ---> pembi.org
- [x]change callback URI & URL ---> strava.js
- [x]change callback URI & URL ---> auth.js

- [x]uncomment mail server

- [x]upload to Github
    git status
    git add .
    git commit -m "xxx?"
    git push origin master --force

SERVER COMMAND LINE:
- []Do I need to do npm install??
- []Do I need to redo the bit that enables port 80?
