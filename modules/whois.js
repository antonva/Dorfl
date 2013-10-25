var whois  = require('node-whois');
var events = require('events'); 
var eventSystem = require('./eventSystem.js');

//Register the module events.
eventSystem.on('whois', function (from, to, data) {
    whois.lookup(data, function(err, data) {
        eventSystem.emit('trigger_response', 'pm', from, to, data); 
    });
});

//whois.lookup(message, function(err, data) {
//    console.log(err, data)
//});
