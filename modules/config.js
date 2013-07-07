//Config loading module for SpamBot.
//Dependencies.
var Firebase    = require('firebase'),
    eventSystem = require('./eventSystem.js');

//Last.FM Module config variables.
LFM_USER    = "";
LFM_SECRET  = "";
LFM_API_KEY = "";
LFM_URL     = "https://azk.firebaseio.com/lastfm_config";

//IRC Module config variables.
IRC_SERVER     = "";
IRC_CHANNELS   = [];
IRC_NICK       = "";
IRC_USERNAME   = "";
IRC_PASSWORD   = "";
IRC_URL        = "https://azk.firebaseio.com/irc_config";

//Sponsor Module config variables.
SPONSOR_URL    = "https://azk.firebaseio.com/sponsors";
SPONSORS       = [];

//Last.FM object. Use as template.
var lastfm_config = new Firebase(LFM_URL);
lastfm_config.on('value', function (snapshot) {
    if (snapshot.val() === null) {
        console.log("Last.FM data not found.");
    } else {
        LFM_USER    = snapshot.val().user;
        LFM_SECRET  = snapshot.val().secret;
        LFM_API_KEY = snapshot.val().api_key;
        //Got to create the eventSystem method so we can emit our events.
        eventSystem.lfm_config_loaded();
    }
});

//IRC object.
var irc_config = new Firebase(IRC_URL);
irc_config.on('value', function (snapshot) {
    if (snapshot.val() === null) {
        console.log('irc_config does not exist.');
    } else {
        IRC_SERVER     = snapshot.val().irc_server;
        IRC_CHANNELS   = snapshot.val().irc_channels;
        IRC_NICK       = snapshot.val().irc_nick;
        IRC_USERNAME   = snapshot.val().irc_user;
        IRC_PASSWORD   = snapshot.val().irc_password;
        eventSystem.irc_config_loaded();
    }
});

//SPONSOR object.
var get_sponsors = new Firebase(SPONSOR_URL);
get_sponsors.on('value', function (snapshot) {
    if (snapshot.val() === null) {
        console.log("Sponsor data not found.");
    } else {
        SPONSORS = snapshot.val();
        console.log(SPONSORS);
        eventSystem.sponsors_loaded();
    }
});
