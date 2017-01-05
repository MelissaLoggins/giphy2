$(document).ready(function(){

   // Event listener for the buttons
     $("button").on("click", function() {
       console.log("Button Clicked")

       var x = $(this).data("search");
   		 console.log("x");   

      // Storing our giphy API URL for a random programming image

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";
      
          console.log(queryURL);

  $.ajax({url:queryURL, method: "GET"})
    .done(function(response){
      console.log(response);

      var results = response.data;
      $("#GIFArea").empty();

      for (var i = 0; i < results.length; i++) {

      $("#GIFArea").prepend("<p>Rating: " + response.data[i].rating + "</p>");
      $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized.url + "'>");

       $("#GIFArea").on("click", function() {

		});	
       };
   });
});
});     