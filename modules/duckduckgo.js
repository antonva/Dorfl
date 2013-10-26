//Dependencies.

var ddg = require('ddg-api');
var eventSystem = require('./eventSystem.js');

var client = new ddg.SearchClient({useSSL: true});
eventSystem.on('d', function(from, to, data) {
    client.search(data, function(error, response, r) {

        if (!error && response.statusCode == 200)
        {
            console.log(r.Abstract);
        } else {
            console.log("ERROR! " + error + "/" + response.statusCode);
        }
    });
});
