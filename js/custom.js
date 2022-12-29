$(function(){


  // Navbar Add Class|Remove Class Js Start 

  var header = $("#navbar");
  
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

  // Navbar Add Class|Remove Class Js End

  // Back to Top Js Start

  var btn = $('#back2top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
  });

  // Back To Top Js End

// Counter Js Start


$('.counter#counter1').counterUp({
  delay: 10,
  time: 5000
});

new Typed('.auto-type',{
  strings : ['Web design', 'Graphic Design', 'Web Development', 'Digital Marketing'],
  typeSpeed : 150,
  delaySpeed : 150,
  loop : true
});

// Counter Js End

    





});