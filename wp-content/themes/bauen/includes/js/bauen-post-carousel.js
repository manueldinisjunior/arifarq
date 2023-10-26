(function ($) {
	'use strict';
	
    // Blog Home owlCarousel
    jQuery('.bauen-blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: jQuery(".bauen-blog .owl-carousel").data("blog-autoplay")
        , smartSpeed: jQuery(".bauen-blog .owl-carousel").data("blog-speed")
        , nav: jQuery(".bauen-blog .owl-carousel").data("projects-nav")
		, navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
		, dots: jQuery(".bauen-blog .owl-carousel").data("projects-dots")
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });
	
})(jQuery); 