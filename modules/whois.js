var whois  = require('node-whois');
var events = require('events'); 
var eventEmitter = new events.EventEmitter();
//var eventSystem = require('./modules/eventSystem.js');

//Register the module events.
eventEmitter.on('whois', function (from, to, message) {
    console.log('Whois is working...');
});

whois.lookup(message, function(err, data) {
    console.log(err, data)
});
