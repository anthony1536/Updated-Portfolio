    var questions = [{
    ques: "What year was Apple founded?",
    ans: ["1883", "1900", "1995", "1976"],
    name: "appleFound",
    correct: "1976",
    divClass: ".appleFound"
},
{
    ques: "What was Apples first product",
    ans: ["IPhone 1", "Apple 1", "Nokia", "Dell"],
    name: "product",
    correct: "Apple 1",
    divClass: ".product"
},
{
    ques: "Was apple worth 1 trillion at one point?",
    ans: ["yes", " no"],
    name: "worth",
    correct: "yes",
    divClass: ".worth"
},
{
    ques: "Who founded apple?",
    ans: ["Steve Jobs", "Steve Wozniak", "Ronald Wayne", "All of the above"],
    name: "apple",
    correct: "All of the above",
    divClass: ".apple"
},
{
    ques: "Where is Apples headquarters?",
    ans: ["Cupertino, CA", "Maples, FL", "Los Angeles, CA", "San Francisco, CA"],
    name: "location",
    correct: "Cupertino, CA",
    divClass: ".location"
},
{
    ques: "Apple offers...",
    ans: ["smart watches", "copmuters/laptops", "smart phones", "all of the above"],
    name: "offers",
    correct: "all of the above",
    divClass: ".offers"
},
{
    ques: "Why is there a bite in the Apple Logo",
    ans: ["to know its not a cherry", "Steve Jobs was hungry", "glitch in the simulation", "all of the above"],
    name: "appleLogo",
    correct: "to know its not a cherry",
    divClass: ".appleLogo"
},
{
    ques: "How many store locations does Apple have?",
    ans: ["467", "300", "708", "500"],
    name: "numberOf",
    correct: "500",
    divClass: ".numberOf"
},
{
    ques: "Why did choose the name Apple?",
    ans: ["easy branding", "Steve Jobs just liked apples...", "threw a dart at a board of names", "no reason"],
    name: "name",
    correct: "Steve Jobs just liked apples...",
    divClass: ".name"
},
{
    ques: "Who made Apple's Logo?",
    ans: ["Janoff", "Steve Jobs", "Will", "Steve Wozniak"],
    name: "logo",
    correct: "Janoff",
    divClass: ".logo"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    



    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz