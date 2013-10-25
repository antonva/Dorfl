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
    //make a 
    //.this.register function that makes modules register their own events.
    //this.register = function (name, trigger) {
    //    this.name()
    //}
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
    this.trigger_parser = function (from, to, message) {
        this.emit('trigger_parser', from, to, message);
    };
};
util.inherits(EventSystem, events.EventEmitter);
module.exports = new EventSystem();
