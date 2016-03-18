/*
  * @package 
  * @subpackage template name HTML
  * 
  * Template Scripts
  * Created by themeturn
  
  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr
  
*/


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
    jQuery('#hero').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });

    jQuery('#hero__rands').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }

  fullscreen();

  // Run the function in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  
 



});