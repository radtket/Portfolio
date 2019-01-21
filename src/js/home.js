import $ from "jquery";
import "slick-carousel";
import mixitup from "mixitup";
import "magnific-popup";
import "./vendor/sticky";

/* ---------------------------------------------
 Page Sliders
 --------------------------------------------- */
function initSliders() {
	$(".client__slider").slick({
		nextArrow: $(".bbbt"),
		prevArrow: $(".bnbt"),
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
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

	$(".review__slider").slick({
		nextArrow: $(".btn-right"),
		prevArrow: $(".btn-left"),
		autoplaySpeed: 5000,
		autoplay: true,
		adaptiveHeight: true,
		dots: true
	});
}

function initPortfolioGrid() {
	mixitup(document.querySelector(".portfolio__wrapper"), {
		animation: {
			duration: 350
		},
		selectors: {
			target: ".portfolio__item"
		},
		classNames: {
			block: "portfolio__nav",
			elementFilter: "item",
			delineatorElement: "--"
		}
	});
}

// Smooth Scroll
function initSmoothScroll() {
	// eslint-disable-next-line func-names
	$("a.page-scroll").bind("click", function(event) {
		const $anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr("href")).offset().top
				},
				1500,
				"easeInOutExpo"
			);
		event.preventDefault();
	});
}

// Lightbox
function lightbox() {
	$(".test-popup-link").magnificPopup({
		gallery: {
			enabled: true
		},
		removalDelay: 300, // Delay in milliseconds before popup is removed
		mainClass: "mfp-with-zoom", // this class is for CSS animation below
		type: "image"
	});
}

// Defining a function to set size for #hero
function fullscreen() {
	$(".hero").css({
		width: $(window).width(),
		height: $(window).height()
	});
}

// Contact Form
function initContactForm() {
	/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
	$("#submit_btn").click(() => {
		// get input field values
		const userName = $("input[name=name]").val();
		const userEmail = $("input[name=email]").val();
		const userSubject = $("input[name=subject]").val();
		const userMessage = $("textarea[name=message]").val();
		let output;
		let postData;

		// simple validation at client's end
		// we simply change border color to red if empty field using .css()
		let proceed = true;
		if (userName === "") {
			$("input[name=name]").css("border-color", "#e41919");
			proceed = false;
		}
		if (userEmail === "") {
			$("input[name=email]").css("border-color", "#e41919");
			proceed = false;
		}

		if (userSubject === "") {
			$("input[name=subject]").css("border-color", "#e41919");
			proceed = false;
		}

		if (userMessage === "") {
			$("textarea[name=message]").css("border-color", "#e41919");
			proceed = false;
		}

		// everything looks good! proceed...
		if (proceed) {
			// data to be sent to server
			postData = {
				userName,
				userEmail,
				userSubject,
				userMessage
			};

			// Ajax post data to server
			$.post(
				"contact_me_smtp.php",
				postData,
				response => {
					// load json data from server and output message
					if (response.type === "error") {
						output = `<div class="error">${response.text}</div>`;
					} else {
						output = `<div class="success">${response.text}</div>`;

						// reset values in all input fields
						$("#contact__form input").val("");
						$("#contact_form textarea").val("");
					}

					$("#result")
						.hide()
						.html(output)
						.slideDown();
				},
				"json"
			);
		}

		return false;
	});

	// reset previously set border colors and hide all message on .keyup()
	$("#contact_form input, #contact_form textarea").keyup(() => {
		$("#contact_form input, #contact_form textarea").css("border-color", "");
		$("#result").slideUp();
	});
}

// document - ready
$(() => {
	$(window).trigger("resize");
	$(".main-nav").sticky();
	initSliders();
	initPortfolioGrid();
	initSmoothScroll();
	lightbox();
	fullscreen();
	initContactForm();
});

$(window).resize(() => {
	fullscreen();
});
