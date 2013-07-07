//Dependencies.

var irc         = require('irc'),
    eventSystem = require('./eventSystem.js');

IrcBot = function () {
    this.bot = new irc.Client(IRC_SERVER, IRC_NICK, {
        channels: IRC_CHANNELS,
        username: IRC_USERNAME,
        password: IRC_PASSWORD,
        debug:    true
    });
    // IRC Bot Listeners
    this.bot.addListener('connect', function (message) {
    console.log('Connected');
    });

    this.bot.addListener('registered', function (message) {
    console.log('Registered');
    });
    this.bot.addListener('error', function (message) {
    console.log('Error: ', message.args);
    });

    this.bot.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message);
    });

    this.bot.addListener('message', function (from, to, message) {
    message = message.toLower();
    switch (message) {
        case '!music': 
            console.log(from + ' -> ' + to + ': ' + message);
        break;
        case '!sponsor':
            console.log(from + ' -> ' + to + ': ' + message);
            eventSystem.sponsors(to);
        break;
        default: 
            console.log(from + ' -> ' + to + ': ' + message);
        break;
    }
    });
};
