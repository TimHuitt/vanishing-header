// Toggle blur based on scroll position
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 40) {
      $('header').addClass('blurred');
    } else {
      $('header').removeClass('blurred');
    }
  });