//Dependencies.
var irc          = require('irc');
var eventSystem  = require('./eventSystem.js');

IrcBot = function () {
    //Lets maek ircbot.
    this.bot = new irc.Client(IRC_SERVER, IRC_NICK, {
        debug:       true,
        showErrors:  true,
        userName:    'Dolan',     //TODO: Move to config?
        realName:    'Dolan Duck',//TODO: Move to config?
        port:        IRC_PORT,
        channels:    IRC_CHANNELS,
        secure:      true,
        selfSigned:  true,
        certExpired: true,
        stripColors: true         //Must have.
    });
    // IRC Bot Listeners
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

    //Switches get stitches.
    this.bot.addListener('message', function (from, to, message) {
    msgParser(from, to, message);
    });
};

function msgParser(from, to, message) {
    var msg     = message.toLowerCase();
    if (msg[0] == IRC_TRIGGER) {
        //here be trigger detection + spaces.
        var len = msg.indexOf(" ",1);
        var trigger;
        if (len == -1) {
            trigger = msg.slice(1);
        } else {
            trigger = msg.slice(1,len);
        }
        //msg.split(' ')[1] to get the first argument.
        //TODO: Rework msg.split so that we send the entire msg excluding the original trigger.
        eventSystem.trigger_parser(trigger,from, to, msg.split(' ')[1]);
    }
}
