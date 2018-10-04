$(document).ready(function() {
 
var digimonbtn = ["wargraymon", "greymon", "agumon"] 


function renderButtons() {

   
    $(".digimon-view").empty();

    for (var i = 0; i < digimonbtn.length; i++) {

      var a = $("<button>");
      a.addClass("digimonbtnarr");
      a.attr("data-name", digimonbtn[i]);
      a.text(digimonbtn[i]);
      $(".digimon-view").append(a);
    }
  }

    $("#add-digimon").on("click", function(event) {
        event.preventDefault();
        var digi = $("#digimon-input").val().trim();
        digimonbtn.push(digi);
        renderButtons();
    });
    
  renderButtons()


  $("button").on("click", function() {
    var digimon = $(this).attr("data-name");
    // console.log($(this).attr("data-name"))

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BKdLvEztdkUqAsFNTm4HawWCeoZQ4Qyi&q=" +
      digimon + "&limit=10&offset=0&rating=G&lang=en";

      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var digiDiv = $("<div>");
          var digiImage = $("<img>");
          digiImage.attr("src", results[i].url);
          digiDiv.append(digiImage);
          $(".digimon-view").prepend(digiDiv);
        }
      });
  });

})