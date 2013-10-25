#!/usr/bin/env node

//Dependencies.
var clc          = require('cli-color'),
    util         = require('util'),
    ic           = require('irc-colors'),
    whois        = require('whois-available'),
    imdb         = require('imdb-api'),
    config       = require('./modules/config.js'),
    eventSystem  = require('./modules/eventSystem.js'),
    lastfmModule = require('./modules/lastfm.js'),
    ircModule    = require('./modules/irc.js'),
    whoisModule  = require('./modules/whois.js'),
    imdbModule   = require('./modules/imdb.js');

var ircbot = new IrcBot();
//var lfm    = new LastfmStream();

//Last.FM event listeners.
//eventSystem.on("now_playing", function (track) {
//    ircbot.bot.say(IRC_CHANNELS, 'Now Playing: ' +  track.artist['#text'] + " - " + track.name);
//});

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
    }
});
