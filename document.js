$(function(){

   // jQuery methods 


// THIS IS FOR THE TOGGLE OF TABLE CONTENTS

$("div.action").click (function(){
  $("#selecttext").hide();
  var $this = $(this);
  var target = $this.data('content');
  $('div.action').not($this).each(function(){
   var $other = $(this);
   var otherTarget = $other.data('content');
   $(otherTarget).hide();       
 });
  
  $(target).animate({width: "toggle"}, 1);

  
});



// THIS IS FOR THE DRAGGABLE TEXTBOX
$(function() {
  $( ".textbox1" ).draggable();
});

// THIS IS FOR THE HOVER FUNCTION TABLE CONTENTS
$(function() {
  $('#layover1').hide();
  $('#tableselect1').hover( function() { $('#layover1').toggle(); } );
  $('#layover2').hide();
  $('#tableselect2').hover( function() { $('#layover2').toggle(); } );
  $('#layover3').hide();
  $('#tableselect3').hover( function() { $('#layover3').toggle(); } );
  $('#layover4').hide();
  $('#deskselect').hover( function() { $('#layover4').toggle(); } );
});






/* this one doesn't work in a linear fashion */
var element = document.getElementById("anticipate");



//Sound controll


//MAKE PEN ALIVE


$( "#anticipate" ).click(function() {
  //wiggle
  TweenMax.to(element, 0.1, {x:"+=20", yoyo:true, repeat:7});
  TweenMax.to(element, 0.1, {x:"-=20", yoyo:true, repeat:7});
    //dissappear
    TweenMax.to(element, 0.9, {opacity:0});

    $('#penalive').show(0).delay(5000);

    var pencilSound = new Audio('sound/thuglife.mp3');
    pencilSound.play();

  });


// 1. Create a variable
var $box = $('#penalive');
var $whatName = $('#playerNames');

// 2. Create a First .to() Tween
//TweenLite.to($box, 0.7, {left: 500, x: 0});

// 3. Create a .from() Tween
//TweenLite.from($box, 2, {x: '-=200px', autoAlpha: 0});

// 4. Create a .set() Tween
//TweenLite.set($box, {x: '-=200px', scale: 0.3});
//TweenLite.set($box, {x: '+=100px', scale: 0.6});
//TweenLite.set($box, {x: '-50%', scale: 1});

// 5. Create a .fromTo() Tween
//TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150});

// 6. Easing 
$( "#anticipate" ).click(function() {

  $('#trypen').hide(0);
  $('#penalive').show(0);
  setTimeout(function(){
    $('#playerNames').show(0);
  }, 4000);

/*
TweenLite.fromTo($box, 2, {x: '-=150px'}, {x: 150, ease:Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete});

TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});*/
TweenLite.to($box, 2.5, {x: '-=200px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false)});
TweenLite.to($box, 2.5, {x: '+=200px', ease:Elastic.easeInOut, delay: 2});



});

// 7. Callback functions
function start(){
  console.log('start');
}

function update(){
  console.log('animating');
}

function complete(){
  console.log('end');
}






//scroll text

$("textbutton").each(function(index, element){
  $(this).click(function(){
    TweenLite.to(window, 1, {scrollTo:{y:"#section" + (index+1), offsetY:70}});
  })
})








});












