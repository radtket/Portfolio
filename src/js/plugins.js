jQuery(document).ready(function($) {
  

$('.client__slider').slick({
  nextArrow: $(".bbbt"),
  prevArrow: $(".bnbt"),
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.review__slider').slick({
  nextArrow: $(".btn-right"),
  prevArrow: $(".btn-left"),
  autoplaySpeed: 5000,
  autoplay: true,
  adaptiveHeight: true,
  dots: true,
});



// Potfolio Filtering


$(window).on('load', function(event) {
  event.preventDefault();
  /* Act on the event */

var $container = $('.portfolio__wrapper');
  $container.isotope({
    filter: '*',
    layoutMode: 'fitRows',
    animationOptions: {
      duration: 5050,
      easing: 'easeInOutExpo',
      queue: false
    },
    masonry: {
      columnWidth: 0
    }
  });


  $('.portfolio__nav a').on( 'click', function() {
    $(".portfolio__nav .active").removeClass("active");
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');
    $container.isotope({
      filter: filterValue,
      animationOptions: {
        duration: 1250,
        easing: 'easeInOutExpo',
        queue: false
      }
    });
    return false;
  });

});







$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

  



}); // End jQuery(document).ready(function($)
