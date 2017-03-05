var topics = ['super smash bros', 'fire emblem', 'marth', 'sheik', 'fox mccloud', 'falco lomardi', 'jigglypuff', 'pikachu', 'mewtwo', 'captain falcon'];

var giphyAPI = "dc6zaTOxFJmzC";

 
var limit = 10;

//limit rating to g or pg
var rating = "";

function buttons() {

	$(".gifsArea").empty();

	for (var i = 0; i < topics.length; i++) {
		var b = $("<button>"); 
		b.addClass("buttons");
		b.attr("data-search", topics[i]);
		b.text(topics[i]);

	$(".content").prepend(b);
	}

};


/*$("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        // Adding movie from the textbox to our array
        movies.push(movie);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
*/
$("#addGifButton").on("click", function(event) {
	event.preventDefault();
	var userSearch = $("#add-gif").val().trim();
	console.log(userSearch);
	topics.push(userSearch);
	buttons();

});

$(document).ready(function() {
	buttons();	
});


$(document).on("click", ".buttons", function () {
console.log('button press');

	$(".gifsArea").empty();


	var userSearch = $(this).attr("data-search");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        userSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {



		var results = response.data;

		for (var i = 0; i < results.length; i++) {

			if (results[i].rating !== "r") {

				var p = $('<p class="paragraph">');

				var gifDiv = $('<div class="div">');

				var rating = results[i].rating;

				var image = $('<img class="image" data-animated="" data-still="" data-state="animated">');



				image.attr("src", results[i].images.fixed_height.url);
				image.attr("data-animated", results[i].images.fixed_height.url);
				image.attr("data-still", results[i].images.fixed_height_still.url)
				image.attr("alt", "image");
				p.text("Rating: " + rating);

				gifDiv.append(image);
				gifDiv.append(p);


				$(".gifsArea").append(gifDiv);

			}

		}
	
		$(".image").on("click", function () {
			console.log(response.data);
			var state = $(this).attr("data-state");
			//var still = 
			//var animated = response.data.images.fixed_height.url;
			//var still = results.images.fixed_height_still.url
			//var animated = results.images.fixed_height.url
			//var state = $(this)


			
			if (state === "animated") {
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
			} else {
				$(this).attr("src", $(this).attr("data-animated"));
				$(this).attr("data-state", "animated");
			} 

		})
	})



});

