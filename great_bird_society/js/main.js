//  <.....hamburger nav menu.......>

$('.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
  $('.hamburger').fadeOut("slow", 0.15);
});

$('.close').on('click', function(event){
  event.preventDefault()
   $('.sidebar').removeClass('active');
});

// main img is going to transition from 500px to a smaller size of 200px,
// when user scrolls down
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  // if the distanceScrolled is  greater than num, > make the image smaller
  if(distanceScrolled > 150){

    $('img').addClass('smaller-finch');
    // $('html','body', 'html::after', 'html::before',
    // 'body::after', 'body::before').css('background-color','#c4e7e0');
    $('html').css('border-color','#c4e7e0').css('transition', 'all 2.5s ease');

  } else {
    $('img').removeClass('smaller-finch');
    // $('html','body', 'html::after', 'html::before',
    // 'body::after', 'body::before').css('background-color','#419e8c');
   $('html').css('border-color','#419e8c');
  }
  
});
// site border is going to transition from a dark green color to a lighter
//  green color, when user scrolls down below 150px or just below the main img.

// .............solution carousel from fewd.................
// <<..............image gallery1............>>
//  When the user clicks on the next button
//  Add 1 to the count variable
//  if count variable is greater than 7 then go back to 0.
var imageNumber = 0;

// Write your pseudo code here!
$('#next1').on('click', function() {
  if (imageNumber < 7) {
    imageNumber += 1;
  } else {
    imageNumber = 0;
  }

  console.log(imageNumber);

  $('#courses1 img').hide();
  $('#courses1 img').eq(imageNumber).show();
});


// Write your pseudo code here!
$('#previous1').on('click', function() {
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 7;
  }

  console.log(imageNumber);

  $('#courses1 img').hide();
  $('#courses1 img').eq(imageNumber).show();
});

// <<..............image gallery2............>>
var imageNumber = 0;

// Write your pseudo code here!
$('#next2').on('click', function() {
  if (imageNumber < 7) {
    imageNumber += 1;
  } else {
    imageNumber = 0;
  }

  console.log(imageNumber);

  $('#courses2 img').hide();
  $('#courses2 img').eq(imageNumber).show();
});


// Write your pseudo code here!
$('#previous2').on('click', function() {
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 7;
  }

  console.log(imageNumber);

  $('#courses2 img').hide();
  $('#courses2 img').eq(imageNumber).show();
});

// <<..............image gallery3............>>
var imageNumber = 0;

// Write your pseudo code here!
$('#next3').on('click', function() {
  if (imageNumber < 7) {
    imageNumber += 1;
  } else {
    imageNumber = 0;
  }

  console.log(imageNumber);

  $('#courses3 img').hide();
  $('#courses3 img').eq(imageNumber).show();
});


// Write your pseudo code here!
$('#previous3').on('click', function() {
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 7;
  }

  console.log(imageNumber);

  $('#courses3 img').hide();
  $('#courses3 img').eq(imageNumber).show();
});








// end...
