$(function() {
  var dom, scrollAnim, ww;
  dom = $('html, body');
  ww = $(window).width();
  scrollAnim = function() {
    $(window).one("scroll", function() {
      return setTimeout(function() {
        $('.poster').fadeOut("fast");
        $('.title').css("position", "fixed").fadeIn("medium");
        dom.animate({
          scrollTop: 0
        }, 200);
        return $('.title').fadeIn("fast", function() {
          return $('#firstInfo').fadeIn("fast", function() {
            return $('.synopsis').fadeIn("fast");
          });
        });
      }, 300);
    });
  };
  $('#poster').click(function(e) {
    e.preventDefault();
    $('.poster').fadeIn("fast");
    dom.scrollTop(0);
    setTimeout(function() {
      return scrollAnim();
    }, 200);
  });
  if (ww < 1479) {
    $('.title').css("font-size", "180%");
  }
  if (ww < 900) {
    $('.title').css("font-size", "120%");
    $('.cast-holder').css("height", "840px");
    $('.right').css("float", "center").css("margin", "0px");
    $('.left').css("float", "center").css("margin", "0px");
  }
  $('.bg').removeClass("before-dom-ready");
  dom.fadeIn("medium");
  $.backstretch("./assets/boarding-gate.jpg");
  $('.poster img').fadeIn("medium");
  scrollAnim();
});
