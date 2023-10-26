(function ($) {
	'use strict';	
    
    // Projects owlCarousel
    jQuery('.projects .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: jQuery(".projects .owl-carousel").data("projects-autoplay")
        , smartSpeed: jQuery(".projects .owl-carousel").data("projects-speed")
        , nav: jQuery(".projects .owl-carousel").data("projects-nav")
		, navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
		, dots: jQuery(".projects .owl-carousel").data("projects-dots")
        , autoplayHoverPause:true
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