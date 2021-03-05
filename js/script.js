$(document).ready(function() {
	$(".accordeon-item").click(function(event) {
		$(this).toggleClass("active");
	})

	$(".header-burger").click(function(event) {
		$(".header-burger, .header-nav, body").toggleClass("active");
	})

	let headerTop = $(".header-top");
	let header = $(".header");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerH) {
			headerTop.addClass("fixed");
		} else {
			headerTop.removeClass("fixed");
		}
	})


	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$("body").removeClass("lock");
		$(".header-burger, .header-nav, body").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
		console.log(elementOffset);
		console.log(elementID);
	})
});