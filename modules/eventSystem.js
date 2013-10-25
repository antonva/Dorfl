//Dependencies.
var clc      = require('cli-color'),
    events   = require('events'),
    util     = require('util');

EventSystem = function () {
    events.EventEmitter.call(this);

    //Trigger Response receives the result of each module and forwards it to the trigger_response event in server.js.
    //The type argument allows modules to decide if they want to send response to channel or private message.
    this.trigger_response = function (type, from, to, message) {
        this.emit('trigger_response', type, from, to, message);
    };

    //Trigger Parser collects all triggers sent from the irc module.
    this.trigger_parser = function (trigger, from, to, data) {
        this.emit(trigger, from, to, data);
    };
};
util.inherits(EventSystem, events.EventEmitter);
module.exports = new EventSystem();
