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
   //Are where we make the gifs pause. 
      var jerkDiv = $('<div id="jerkDiv">');
      var p = $('<p>').text("Rating: " + results[i].rating);
      var jerkImage = $('<img>');
      jerkImage.attr('src', results[i].images.fixed_height_still.url);
      jerkImage.attr('data-still', results[i].images.fixed_height_still.url);
      jerkImage.attr('data-animate', results[i].images.fixed_height.url);
      jerkImage.attr('class', 'jerkImage');
      jerkImage.attr('data-state', 'still');
      jerkDiv.append(p);
      jerkDiv.append(jerkImage);
      $('#GIFArea').append(jerkDiv);


      $("#GIFArea").on("click", function() {

		});	
       };
   });
});

$(document).on('click', '.jerkImage', function() {
    var state = $(this).attr('data-state'); 
    
    if (state === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }

    function renderButtons() { 
  $("#jerkButton").empty(); 
//   for(var i = 0; i < x.length; i++) { 
//     var a = $("<button>"); 
//     a.addClass("jerks"); 
//     a.attr("data-name", jerks[i]); 
//     a.text(jerks[i]); 
//     $("#jerkButton").append(a); 
//   } 

//   $("#addJerk").on("click", function(event) {
//     event.preventDefault();
//     var jerk = $("#usersJerk").val().trim();
//     jerks.push();

// renderButtons();
    // })
   // }
   }
});
});






   