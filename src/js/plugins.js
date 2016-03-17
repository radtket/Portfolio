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