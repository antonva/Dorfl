var eventSystem = require('./eventSystem.js');

eventSystem.on("trigger_parser", function (from, to, message) {
    console.log(message);
});
