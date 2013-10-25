//Imdb module with some features.

//Dependencies.
var imdb        = require('imdb-api');
var ircolor     = require('irc-colors');
var Iconv       = require('iconv').Iconv;
var jschardet   = require('jschardet');
var eventSystem = require('./eventSystem.js');

//TODO: Fix encoding problems. currently, objects are encoded in windows-1252 and crash on Kanji characters.
//Construct the IMDB icon color.
var icon = ircolor.bold.black.bgyellow(' IMDB ');
//Listen for the trigger.
eventSystem.on('imdb', function(from, to, data) {
    //Lets not crash it on those nasty emptystrings.
    if (data != '') {
    imdb.getReq({name: data}, function(err, things) {
        if (things.title != ''){
        var msg   = icon + ' ' + things.title + ' Rating: ' + things.rating + ' || ' + things.imdburl;
        eventSystem.emit('trigger_response', 'chan', from, to, msg); 
        }
    });
    }
});

