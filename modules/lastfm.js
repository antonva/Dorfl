//Dependencies.
var lastfm      = require('lastfm').LastFmNode,
    eventSystem = require('./eventSystem.js');
//Lastfm Module
LastfmStream = function () {
    var stream = new lastfm({
        api_key: LFM_API_KEY,
        secret: LFM_SECRET
    });

    var track_stream = stream.stream(LFM_USER);
      
    track_stream.on('error', function (error) {
        console.log('Error: ' + error.message);
    });

    track_stream.on('nowPlaying', function (track) {
        console.log('Now Playing: ' + track.name);
        eventSystem.now_playing(track);
    });

    track_stream.on('lastPlayed', function (track) {
        console.log('Last Played: ' +  track.artist['#text'] + " - " + track.name);
    });

    track_stream.on('stoppedPlaying', function (track) {
        console.log('Stopped Playing: ' + track.name);
    });
    
    track_stream.start();
};


