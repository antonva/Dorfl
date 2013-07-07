#!/usr/bin/env node

//Dependencies.
var clc          = require('cli-color'),
    util         = require('util'),
    ic           = require('irc-colors'),
    config       = require('./modules/config.js'),
    eventSystem  = require('./modules/eventSystem.js'),
    lastfmModule = require('./modules/lastfm.js'),
    ircModule    = require('./modules/irc.js');

var ircbot;

//Config event listeners.
eventSystem.on("lfm_config_loaded", function () {
    console.log(clc.whiteBright("Last.FM config loaded."));
    console.log(clc.whiteBright("Starting Last.FM stream."));
    var lfm = new LastfmStream();
});

eventSystem.on("irc_config_loaded", function () {
    console.log(clc.whiteBright("IRC config loaded."));
    console.log(clc.whiteBright("Starting IRC Bot as: " + IRC_NICK));
    ircbot = new IrcBot();
});

//Last.FM event listeners.
eventSystem.on("now_playing", function (track) {
    ircbot.bot.say(IRC_CHANNELS, 'Now Playing: ' +  track.artist['#text'] + " - " + track.name);
});

//Sponsor event listeners.
eventSystem.on("sponsors", function (to) {
    var keyArray = Object.keys(SPONSORS);
    var rndspons = keyArray[Math.floor(Math.random()*keyArray.length)];
    var obj      = SPONSORS[rndspons.toString()];
    ircbot.bot.say(to, obj.name + " - " + obj.message);
    ircbot.bot.say(to, obj.site);
});
