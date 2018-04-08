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
		$('h1').velocity({ opacity: .5 }, 2500);
		// $('h1').velocity({ height: '2em' }, { loop: 4 });
    $('p').velocity({ width: '600px' }, 50 );
  }  else {
    $('img').removeClass('smallerlogo');
		$('html').css('border-color','#242626');
		$('p').css('color', '#990803');
  }


});








// <<..........bottom............>>
