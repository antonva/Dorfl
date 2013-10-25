#!/usr/bin/env node

//Dependencies.
var clc          = require('cli-color'),
    util         = require('util'),
    ic           = require('irc-colors'),
    whois        = require('node-whois'),
    config       = require('./modules/config.js'),
    eventSystem  = require('./modules/eventSystem.js'),
    lastfmModule = require('./modules/lastfm.js'),
    ircModule    = require('./modules/irc.js');
    whoisModule  = require('./modules/whois.js');

var ircbot;
var lfm;

ircbot = new IrcBot();
lfm    = new LastfmStream();

//Last.FM event listeners.
eventSystem.on("now_playing", function (track) {
    ircbot.bot.say(IRC_CHANNELS, 'Now Playing: ' +  track.artist['#text'] + " - " + track.name);
});

eventSystem.on("trigger_response", function(type, from, to, message) {
    switch (type) {
        case 'pm':
            ircbot.bot.say(from, message);
        break;
        
        case 'chan':
            ircbot.bot.say(to, message);
        break;
    }
});
