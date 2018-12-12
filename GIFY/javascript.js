//Create a funtion on an array of cars for initial buttons
var foodArray = ["Pizza", "Tacos", "Steak", "Burgers", "Salad"];



$(document).ready(function() {
    for (var i = 0; i < foodArray.length; i++) {
        //creates new buttons
        $("#food-buttons").append("<button type='button' onclick='searchGif(\"" + foodArray[i] + "\")' class='btn btn-primary' value=' " + foodArray[i] + "'> " + foodArray[i] + " </button>");
    }
});

//
function foodButtonClicked() {
    var userInput = $('#food-input').val();
    searchGif(userInput);
}


//adds a new button when search button is clicked
function submitButtonClicked() {
    var userInput = $('#food-input').val();

    if (userInput) {
        $('#food-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}



//function to use API key
function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=0R2hGaNLQSxxb81xF7dJoqyawj7OOneH',
            type: 'GET',
            
        })
        .done(function(response) {
            displayGif(response);
            
        })
    
}


//function to display GIF and ratings
function displayGif(response) {
    $('#food').empty();
    for (var i = 0; i < response.data.length; i++) {
        
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';


        image = '<div class="col-md-4">' + image + "</div>";
        $('#food').append(image);
    }

//swap between gifs
    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
