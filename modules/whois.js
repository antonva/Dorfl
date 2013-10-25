//Whois module that queries domains and checks availability.

//Dependencies.
var whois  = require('whois-available');
var events = require('events'); 
var eventSystem = require('./eventSystem.js');

//Register the module events.
eventSystem.on('whois', function (from, to, data) {
    console.log(data);
    whois(data, function(err, response, isAvailable) {
        //TODO: Clean up domain input so bla.google.com only queries google.com.
        if (isAvailable) {
            msg = data + ' is available.';
            eventSystem.emit('trigger_response', 'chan', from, to, msg); 
        } else {
            msg = data + ' is not available.';
            eventSystem.emit('trigger_response', 'chan', from, to, msg); 
        }
    });
});
