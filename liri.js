var keys = require('./keys.js');
var request = require("request");
require("dotenv").config();
// VARIABLE STORING AND LINK TO FILE SYSTEMS
var fs = require('fs');

//  access twitter API
var twitterKeys = keys.access.twitter;

var Twitter = require('twitter'); 


// TWEETS!

var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});



var params = {screen_name: 'asalvador95'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  // if (error) throw error 

    console.log(tweets[0].text);

		if(error){
			console.log(error);
		}

	});

//  access spotify API
// var spotifyKeys = key.access.spotify;

// var Spotify = require('node-spotify-api');


// var spotify = new Spotify({
//   id: spotifyKeys.id
//   secret: spotifyKeys.secret
// });
// console.log(spotify);


// ...
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// Then create a request to the queryUrl
request( "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful
    if (!error && response.statusCode === 200) {

        console.log("Title: "+ JSON.parse(body).Title +"\nRating: " + JSON.parse(body).imdbRating + "\nYear: " + JSON.parse(body).Released + "\nCountry: " + JSON.parse(body).Country + "\nRuntime: " + JSON.parse(body).Runtime + "\nRotten Tomatoes Score: " +  JSON.parse(body).Ratings[1].Value  + "\nActors: " +JSON.parse(body).Actors + "\n----------" + "\nPlot: " + JSON.parse(body).Plot);
      
      }

  });

}


action();



