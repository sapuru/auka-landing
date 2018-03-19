
  var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[data-scroll-ignore]',
    header: null,
    speed: 2000,
    offset: 0,
    easing: 'easeInOutCubic',

        customEasing: function(time) {
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
          },

          before: function(anchor, toggle) {},
          after: function(anchor, toggle) {}
  });
