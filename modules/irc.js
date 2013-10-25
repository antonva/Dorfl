//Dependencies.
var irc          = require('irc');
var eventSystem  = require('./eventSystem.js');

IrcBot = function () {
    //Lets maek ircbot.
    this.bot = new irc.Client(IRC_SERVER, IRC_NICK, {
        debug:       true,
        showErrors:  true,
        userName:    IRC_USERNAME,
        realName:    IRC_REALNAME,
        port:        IRC_PORT,
        channels:    IRC_CHANNELS,
        secure:      IRC_SSL,
        selfSigned:  IRC_SELFSIGNED,
        certExpired: true,
        stripColors: true         //Strips colour and other control characters from messages, very useful.
    });

    // IRC Bot Listeners. TODO: Implement logging to files and not console.
    this.bot.addListener('connect', function (message) {
    console.log('Connected');
    });
    this.bot.addListener('reply', function (message) {
    cosole.log('Reply: ' + message);
    });
    this.bot.addListener('registered', function (message) {
    console.log('Registered');
    });
    this.bot.addListener('error', function (message) {
    console.log('Error: ', message.args);
    });
    this.bot.addListener('netError', function(message) {
    console.log('netError: ' + message);
    });
    this.bot.addListener('pm', function (from, message) {
    console.log(from + ' -> ME: ' + message);
    });

    //Send message events to our parsing function.
    this.bot.addListener('message', function (from, to, message) {
    msgParser(from, to, message);
    });
};

function msgParser(from, to, message) {
    var msg     = message.toLowerCase();
    if (msg[0] == IRC_TRIGGER) {
        //here be trigger detection.
        var len = msg.indexOf(" ",1);
        var trigger;
        if (len == -1) {
            trigger = msg.slice(1);
        } else {
            trigger = msg.slice(1,len);
        }
        //mesg contains entire message excluding the original trigger. 
        mesg =  msg.substring(len+1,msg.length);
        eventSystem.trigger_parser(trigger,from, to, mesg);
    }
}
