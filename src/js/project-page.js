import { WOW } from "wowjs";

// Defining a function to set size for #hero
function fullscreen() {
	$(".hero").css({
		width: $(window).width(),
		height: $(window).height()
	});
}

// document - ready
$(() => {
	$(window).trigger("resize");
	$(".main-nav").sticky();
	fullscreen();
});

$(window).resize(() => {
	fullscreen();
});


(function () {
	new WOW({
		mobile:  false
	}).init();
}());