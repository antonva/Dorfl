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

var ircbot;
var lfm;

ircbot = new IrcBot();
lfm    = new LastfmStream();

//Last.FM event listeners.
eventSystem.on("now_playing", function (track) {
    ircbot.bot.say(IRC_CHANNELS, 'Now Playing: ' +  track.artist['#text'] + " - " + track.name);
});

eventSystem.on("trigger_response", function(from, to, message) {
    //make logic here... 
});
