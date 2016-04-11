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










/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_subject = $('input[name=subject]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_subject == "") {
            $('input[name=subject]').css('border-color', '#e41919');
            proceed = false;
        }
        
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userSubject': user_subject,
                'userMessage': user_message
            };
            
            //Ajax post data to server
            $.post('contact_me_smtp.php', post_data, function(response){
            
                //load json data from server and output message     
                if (response.type == 'error') {
                    output = '<div class="error">' + response.text + '</div>';
                }
                else {
                
                    output = '<div class="success">' + response.text + '</div>';
                    
                    //reset values in all input fields
                    $('#contact__form input').val('');
                    $('#contact_form textarea').val('');
                }
                
                $("#result").hide().html(output).slideDown();
            }, 'json');
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });


    // Sticky Nav
    $(".main-nav").sticky();



    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());









}); // End document ready





