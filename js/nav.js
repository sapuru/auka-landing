
  $(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
      $("#menu").addClass("style_nav");
    } else {
      $("#menu").removeClass("style_nav");
    }
  });
