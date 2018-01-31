//main.js

//console.log("Hi there");


var currenDiv = "intro";
var currentAudio = new Audio('sound/classroom.mp3');

currentAudio.play();



function transitionTo( otherDiv ) {

	console.log( "executing function transitionTo("+otherDiv+")" );

  if(otherDiv == "bedroom") {
    currentAudio.pause();
  }

  document.getElementById(currenDiv).style.visibility = "hidden";
  document.getElementById(otherDiv).style.visibility = "visible";
  currenDiv = otherDiv;

}




//save username to variable 
$(document).ready(function() {
  console.log("jQuery is ready to use...");
  $("#newGame").submit(function(e) {
    e.preventDefault();
    var player_One = $('#nameOne').val();
    var player_Two = $('#nameTwo').val();
    $('#pReply').html("Ah. " + player_One + ", is it? <br>My name is Freddie, nice to meet you!");
  });
});
