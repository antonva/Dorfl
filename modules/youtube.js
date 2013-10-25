//Youtube search module with some features.

//Dependencies.
var youtube     = require('youtube-feeds');
var ircolor     = require('irc-colors');
var Iconv       = require('iconv').Iconv;
var jschardet   = require('jschardet');
var eventSystem = require('./eventSystem.js');

//Construct the YouTube icon color.
var icon = ircolor.bold.black.bgwhite('You') + ircolor.bold.white.bgred('Tube');
//Listen for the trigger.
eventSystem.on('yt', function(from, to, data) {
    //Lets not crash it on those nasty emptystrings.
    if (data != '') {
    youtube.feeds.videos( 
        { q            : data,
          'max-results': 1,
          orderby      : 'published'
        }, function(err, data) {
            if (err) {
                console.log(err);
            } else {
            console.log(data);
            var url = 'http://www.youtube.com/watch?v=' + data.items[0].id;
            var msg = icon + ' ' + data.items[0].title + ' || ' + url;
            eventSystem.emit('trigger_response', 'chan', from, to, msg); 
            }
        });

    }
});

