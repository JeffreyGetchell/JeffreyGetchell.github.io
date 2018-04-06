// Make it rain!

// When the user scrolls in the browser window
$(window).on('scroll', function () {
	 // Get the distance scrolled
	var distanceScrolled = $(window).scrollTop();

  // if Distancescrolled is > 50 make the image small
  if(distanceScrolled > 100) {
    $('img').addClass('smallerlogo');
		$('html').css('border-color','#BF2D13').css('transition', 'all 2.5s ease');
		$('p').css('color', '#D6411C').css('transition', 'all 1s ease');
  }  else {
    $('img').removeClass('smallerlogo');
		$('html').css('border-color','#242626');
		$('p').css('color', '#990803');
  }

});



// 400fo6
