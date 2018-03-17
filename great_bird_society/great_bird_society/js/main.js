//  <.....hamburger nav menu.......>

$('.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
  $('.hamburger').fadeOut("slow", 0.15);
});

$('.close').on('click', function(){
   $('.sidebar').removeClass('active');
});

// main img is going to transition from 500px to a smaller size of 200px,
// when user scrolls down
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  // if the distanceScrolled is  greater than num, > make the image smaller
  if(distanceScrolled > 150){
    $('img').addClass('smaller-finch');
  } else {
    $('img').removeClass('smaller-finch');
  }
});

// When the user clicks on the next button
// Add 1 to the count variable
// if count variable is greater than 3 then go back to 0.

// <<..............image gallery1............>>
// var count =0;
//
// function changeImage() {
//   if (count > 7) {
//       count =0;
//   }
//   else if (count < 0) {
//            count =7;
//   }
//   $('#courses1 img').hide();
//   $('#courses1 img').eq(count).show();
// }
//
// $('#next1').on('click', function() {
//   count +=1;
//   changeImage();
// });
//
//
// $('#previous1').on('click', function() {
//   count -=1;
//   changeImage();
// });
//
//
//
// //<<..............image gallery2............>>
//
// var count = 0;
//
// function changeImage() {
//   if (count > 7) {
//     count = 0;
//   }
//   else if (count < 0) {
//     count = 7;
//   }
//   $('#bestsellers img').hide();
//   $('#bestsellers img').eq(count).show();
// }
//
// $('#more').on('click', function() {
//   count +=1;
//   changeImage();
// });
//
//
// $('#less').on('click', function() {
//   count -=1;
//   changeImage();
// });

// .............solution carousel from fewd.................
// <<..............image gallery1............>>
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
