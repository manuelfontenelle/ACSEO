import "./scss/style.scss" // A enlever en prod

window.onload = function () {
	// console.log("hello world")

	var $carousel = $(".slider")

	$(".slider").slick({
		dots: false,
		arrows: true,
		slide: ".slick-slideshow__slide",
		slidesToShow: 2,
		speed: 300,
		infinite: true,
		centerMode: true,
		autoplaySpeed: 2000,
		autoplay: true,
		centerPadding: "250px",

		responsive: [
			{
				breakpoint: 991,
				settings: {
					speed: 300,
					infinite: true,
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	})

	function setSlideVisibility() {
		//Find the visible slides i.e. where aria-hidden="false"
		var visibleSlides = $carousel.find(
			'.slick-slideshow__slide[aria-hidden="false"]'
		)
		//Make sure all of the visible slides have an opacity of 1
		$(visibleSlides).each(function () {
			$(this).css("opacity", 1)
		})

		//Set the opacity of the first and last partial slides.
		$(visibleSlides).first().prev().css("opacity", 0)
	}

	$carousel.slick(settings)
	$carousel.slick("slickGoTo", 1)
	setSlideVisibility()

	$carousel.on("afterChange", function () {
		setSlideVisibility()
	})
}
