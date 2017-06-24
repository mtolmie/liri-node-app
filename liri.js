var fs = require('fs');
var spotify = require('spotify');
var request = require('request');

// My Scripts
var keys = require('./keys.js');

var appLiri = {
    
  "spotify-this-song": function(keyword) {
    spotify.search({ type: 'track', query: keyword || 'Like a Stone Chris Cornell' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

      if(data.tracks.items.length > 0) {
        var record = data.tracks.items[0];

        console.log(' ');
        console.log('================ Song Info ================');
        console.log('Artist: ' + record.artists[0].name);
        console.log('Name: ' + record.name);
        console.log('Link: ' + record.preview_url);
        console.log('Album: ' + record.album.name);
        console.log('===========================================');
        console.log(' ');

        app.logData(data);
      } else {
        console.log('No dice on your song.');
      }



    });
  },
  "movie-this": function(query) {
    request('http://www.omdbapi.com/?t=' + (query || 'Top Gun') +'&tomatoes=true', function (error, response, info) {
      if (!error && response.statusCode == 200) {

        var movieData = JSON.parse(info);

        console.log(' ');
        console.log('================ Movie Info ================');
        console.log('Title: ' + movieData.Title);
        console.log('Year: ' + movieData.Year);
        console.log('IMDB Rating: ' + movieData.imdbRating);
        console.log('Country: ' + movieData.Country);
        console.log('Language: ' + movieData.Language);
        console.log('Plot: ' + movieData.Plot);
        console.log('Actors: ' + movieData.Actors);
        console.log('Rotten Tomatoes Rating: ' + movieData.tomatoRating);
        console.log('Rotten Tomatoes URL: ' + movieData.tomatoURL);
        console.log('===========================================');
        console.log(' ');

        app.logData(movieData);
      }
    });
  },
  




