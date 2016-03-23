$(".main-nav").sticky();


jQuery(function($) {
  "use strict";

   $('.navigation').singlePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        offset: 0,
        filter: ':not(.external)',
        easing: 'swing',

    });

    $.noConflict();
     $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });


       // Defining a function to set size for #hero 
  function fullscreen() {
    jQuery('.hero').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }

  fullscreen();

  // Run the function in case of window resize
  $(window).resize(function() {
    fullscreen();
  });


  $('a#sourceDownload').attr({ target : '_blank', 
                       href   : 'https://github.com/radtket/Portfolio/archive/gh-pages.zip'
                     });



  // Lightbox

    (function () {
      $('.test-popup-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'
      });

    }());












});