
- []user approval & authentication
- []store user tokens against users in db
- []monitor for user activity
- []if activity - then upload activity
- []check segments in activity
- []get strava segment id of confirm_segment for each bikepark
- []if bikepark activity -> then log against bikepark

- 

useful links:
Strava’s V3 API : https://strava.github.io/api/
npm Strava-V3 : https://www.npmjs.com/package/strava-v3
node-strava : https://github.com/mcfitz2/node-strava
<h2>Strava Integration Notes</h2>
<p>Useful Links:</p>
<a href ="https://www.strava.com/oauth/authorize?client_id=15180&response_type=code&redirect_uri=https://epicbattle.youaremadetomove.co.za/connect&scope=write">Virign Active link to strava to auth rider</a>>

<a href="https://www.youaremadetomove.co.za/">Virgin Epic Challenge</a>
<a href="https://www.youaremadetomove.co.za/technical-support/">Technical Support</a>
<a href="https://www.youaremadetomove.co.za/epic-battle/my-profile/">My Profile</a>


Strava API Registration Details:
================================
https://www.strava.com/settings/api

Client ID : 20249
Client Secret:	405fa022a069863c438a49429d8d2c37c3be10b4 
Your Access Token (?) 
(permissions: public)	2d8f781d16bb0a5196b725b98eac2b893ab3a10b 
Carl Strava : https://www.strava.com/athletes/194278
Pembi Strava Club ID: https://www.strava.com/clubs/107248/
Get athlete info : GET https://www.strava.com/api/v3/activities/1165482667?access_token=2d8f781d16bb0a5196b725b98eac2b893ab3a10b
Get activity info : GET https://www.strava.com/api/v3/activities/1165482667?access_token=2d8f781d16bb0a5196b725b98eac2b893ab3a10b

Pembi Club Members
AlwynH 1684763
AnzelduP 12649496
BernhardW 2758079

STRAVA SEGMENT ID's
===================
WTF : https://www.strava.com/segments/674672
1 - Groenkloof - 8426266
5 - Wolwespruit - 9241667
6 - Rosemary Hill - 13350341
11- Buffelsdrift - 12323823
16 - Modderfontein - 3701508
20 - Braamsfontein Spruit - 3470419

ACTIVITIES - Carl
===================
1 - Groenkloof - 1141025791
5 - Wolwespruit - 1158498290 (newer) / 210027964 (older)
6 - Rosemary Hill - 1040632520 (24h)
11- Buffelsdrift - 461445196
16 - Modderfontein - 1085622970
20 - Braamsfontein Spruit - 1197418738


STRAVA SUBSCRIPTION
===================
{
    "id":107392,
    "resource_state":2,
    "application_id":20249,
    "aspect_type":"create",
    "object_type":"activity",
    "callback_url":"https://pembi-system-trackz.c9users.io/webhook",
    "created_at":"2017-10-01T14:15:07.089439311Z",
    "updated_at":"2017-10-01T14:15:07.089437632Z"
}