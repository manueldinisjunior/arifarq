// Slider 
jQuery(document).ready(function() {
    var owl = jQuery('.header .owl-carousel');
    // Slider owlCarousel
    jQuery('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: jQuery(".slider .owl-carousel").data("speed"),
         nav: true,
         navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    jQuery('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: jQuery(".slider-fade .owl-carousel").data("speed") 	,
        animateOut: 'fadeOut',
		animateIn: 'fadeIn',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        jQuery('h4').removeClass('animated fadeInUp');
        jQuery('h1').removeClass('animated fadeInUp');
        jQuery('h2').removeClass('animated fadeInUp');
        jQuery('h3').removeClass('animated fadeInUp');
        jQuery('h5').removeClass('animated fadeInUp');
        jQuery('h6').removeClass('animated fadeInUp');
        jQuery('p').removeClass('animated fadeInUp');
        jQuery('.butn-light').removeClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
    });
});