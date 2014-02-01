#!/usr/bin/env node

//Dependencies.
var util          = require('util'),
    config        = require('./modules/config.js'),
    eventSystem   = require('./modules/eventSystem.js'),
    lastfmModule  = require('./modules/lastfm.js'),
    ircModule     = require('./modules/irc.js'),
    whoisModule   = require('./modules/whois.js'),
    //imdbModule    = require('./modules/imdb.js'), //disabled until further notice.
    youtubeModule = require('./modules/youtube.js'),
    googleModule  = require('./modules/google.js'),
    ddgModule     = require('./modules/duckduckgo.js')

var ircbot = new IrcBot();


//Music must have triggered some kind of response.
eventSystem.on("trigger_response", function(type, from, to, message) {
    switch (type) {
        //Private message.
        case 'pm':
            ircbot.bot.say(from, message);
        break;
        
        //Channel message.
        case 'chan':
            ircbot.bot.say(to, message);
        break;
        
        //Notice.
        case 'notice':
            ircbot.bot.notice(from, message)
        break;
    }
});
