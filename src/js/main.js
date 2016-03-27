$(document).ready(function() {
 
  // Sticky Nav
  $(".main-nav").sticky();



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



  // Project Source Downloads
  $('a#sourceDownload__greenCan').attr({
    target: '_blank',
    href: 'https://github.com/radtket/Portfolio/archive/gh-pages.zip'
  });

  $('a#sourceDownload__rands').attr({
    target: '_blank',
    href: 'https://github.com/radtket/RandS/archive/master.zip'
  });



  // Lightbox
  function lightbox() {
       $('.test-popup-link').magnificPopup({
        gallery: {
        enabled: true
      },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type: 'image'
    });
  }

  lightbox();










  $('.contact__form form').submit(function(e) {
    e.preventDefault();
      $('.contact__form form input[type="text"], .contact__form form textarea').removeClass('input-error');
      var postdata = $('.contact-form form').serialize();
      $.ajax({
          type: 'POST',
          url: 'contact.php',
          data: postdata,
          dataType: 'json',
          success: function(json) {
              if(json.emailMessage != '') {
                  $('.contact-form form .contact-name').addClass('input-error');
              }
              if(json.emailMessage != '') {
                  $('.contact-form form .contact-email').addClass('input-error');
              }
              if(json.subjectMessage != '') {
                  $('.contact-form form .contact-subject').addClass('input-error');
              }
              if(json.messageMessage != '') {
                  $('.contact-form form textarea').addClass('input-error');
              }
              if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                  $('.contact-form form').fadeOut('fast', function() {
                      $('.contact__form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                      // reload background
                  });
              }
          }
      });
  });








}); // End document ready





