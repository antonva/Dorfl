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
    //Last.FM events.
    this.now_playing = function (data) {
        this.emit('now_playing', data);
    };

    //Trigger Response.
    this.trigger_response = function (from, to, message) {
        this.emit('trigger_response', from, to, message);
    };

    //Trigger Parser.
    this.trigger_parser = function (trigger, from, to, data) {
        console.log(trigger);
        this.emit(trigger, from, to, data);
    };
};
util.inherits(EventSystem, events.EventEmitter);
module.exports = new EventSystem();
