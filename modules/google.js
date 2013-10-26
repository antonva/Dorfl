//Dependencies.

var ircolor     = require('irc-colors');
var google      = require('google-tools');
var eventSystem = require('./eventSystem');

//Icon.
//icon = ircolor.bold.blue.bgwhite('G')+ircolor.bold.red.bgwhite('o')+ircolor.bold.yellow.bgwhite('o')+ircolor.bold.blue.bgwhite('g')+ircolor.bold.green.bgwhite('l')+ircolor.bold.red.bgwhite('e');

//Not as bloated icon.
icon = ircolor.bold.white.bgblue(' g ');

eventSystem.on('g', function(from, to, data) {
    google.search(
        {q   : data,
         num : 1,
         hl  : 'en'
        }, function(err, r) {
            if (err) {
                console.log(err);
            } else {
                msg = icon + ' ' + r.results[0].link;
                console.log(r);
                eventSystem.emit('trigger_response', 'chan', from, to, msg); 
            }
        });
});
