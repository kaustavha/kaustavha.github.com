$(function() {
  var dom, scrollAnim, scrollTo, ww;
  dom = $('html, body');
  ww = $(window).width();
  scrollAnim = function() {
    $(window).one("scroll", function() {
      return setTimeout(function() {
        $('.poster').fadeOut("medium");
        $('.title').css("position", "fixed").fadeIn("medium");
        dom.animate({
          scrollTop: 0
        }, 200);
        return $('.title').fadeIn("medium", function() {
          return $('#firstInfo').fadeIn("medium", function() {
            return $('.synopsis').fadeIn("medium");
          });
        });
      }, 300);
    });
  };
  scrollTo = function(ele) {
    return dom.animate({
      scrollTop: $(ele).offset().top - 300
    }, 200);
  };
  $('#poster').click(function(e) {
    e.preventDefault();
    $('.poster').fadeIn("fast");
    $('.title').fadeOut("fast");
    dom.scrollTop(0);
    setTimeout(function() {
      return scrollAnim();
    }, 200);
  });
  $('#synopsis').click(function(e) {
    return scrollTo('.synopsis');
  });
  $('#cast').click(function(e) {
    return scrollTo('.cast');
  });
  $('#tickets').click(function(e) {
    return scrollTo('.tickets');
  });
  if (ww < 1479) {
    $('.title h1').css("font-size", "180%");
  }
  if (ww < 900) {
    $('.title h1').css("font-size", "150%");
    $('#firstInfo').css("margin-top", "20%");
    $('.cast-holder').css("height", "900px");
    $('.right').css("float", "center").css("margin", "0px");
    $('.left').css("float", "center").css("margin", "0px");
  }
  $('.bg').removeClass("before-dom-ready");
  dom.fadeIn("medium");
  $.backstretch("./assets/boarding-gate.jpg");
  $('.poster img').fadeIn("medium");
  scrollAnim();
});
