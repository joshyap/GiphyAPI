/*
var topics = ['super smash bros', 'fire emblem', 'marth', 'sheik', 'fox', 'falco', 'jigglypuff', 'pikachu', 'mewtwo', 'captain falcon'];
//var topics = []

//public beta Giphy API key: dc6zaTOxFJmzC
//search endpoint -> http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   


$(document).ready(function(event) {

	$('.content').empty();
	populateButtons;


	function populateButtons() {
		//loop through topics array 
	for (i=0;i<topics.length;i++) {
		search = topics[i];
		console.log(queryURL);
		//create buttons for each topic
		var newButtons = $("<button>");
		newButtons.text(topics[i]);

		populateGifs();
		}
	}
	
	function queryAPI(searchTerm) {
		//ajax request
		var key = "dc6zaTOxFJmzC";
		var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + key + "&limit=10");

		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(function(response) {
			var gifs = response.data;
			populateGifs();
		});
	}

	function populateGifs() {
		$('.content').empty();

		for (i = 0; i < response.data.length; i++) {
		var newGif = $("<div>");
//		newGif.attr("src", "response.data[0].embed_url")
		newGif.addClass('gif');
		newGif.html('Rating: ' + '<br>' + topics[i] + '<br>' + '<br>');
		$('.content').append(newGif);
		}
		
	}

	$('#addGif').on("click", function() {
		var newTopic = $('#searchTerm').val();
		topics.push(newTopic);
	});
});
*/