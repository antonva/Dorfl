//Dependencies.
var clc      = require('cli-color'),
    events   = require('events'),
    util     = require('util');

EventSystem = function () {
    events.EventEmitter.call(this);
    
    //Config events. Add your config code here.
    this.lfm_config_loaded = function () {
        this.emit('lfm_config_loaded');
    };
    this.irc_config_loaded = function () {
        this.emit('irc_config_loaded');
    };

    //IRC events.
    //TODO: going to event out all text in channel so that http module and similar can create "viewports".
    //Last.FM events.
    this.now_playing = function (data) {
        this.emit('now_playing', data);
    };
    //Sponsor events.
    this.sponsors = function(data) {
        this.emit('sponsors', data);
    };

    this.sponsors_loaded = function() {
        this.emit('sponsors_loaded');
    };
    //HTTP events.
};
util.inherits(EventSystem, events.EventEmitter);
module.exports = new EventSystem();
