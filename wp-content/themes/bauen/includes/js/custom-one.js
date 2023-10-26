jQuery(function() {
    "use strict";
    var wind = jQuery(window);
	// Main footer 
    var footer = jQuery("footer").outerHeight();
    jQuery("main").css("marginBottom", footer);
    
    // ScrollIt
    jQuery.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".navbar"),
            logo = jQuery(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            //logo.attr('src', 'img/logo.png');
        }else{
            navbar.removeClass("nav-scroll");
            //logo.attr('src', 'img/logo.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    jQuery(".navbar-nav .dropdown-item:not(.menu-item-has-children) a").on('click', function () {
        jQuery(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function(indx){
        if (jQuery(this).attr("data-background")){
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
		if (jQuery(this).attr("data-position")){
            jQuery(this).css("background-position", "" + jQuery(this).data("position") + "");
        }
		if (jQuery(this).attr("data-size")){
            jQuery(this).css("background-size", "" + jQuery(this).data("size") + "");
        }
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        jQuery('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !jQuery(this.element).hasClass('animated')) {
                i++;
                jQuery(this.element).addClass('item-animate');
                setTimeout(function () {
                    jQuery('body .animate-box.item-animate').each(function (k) {
                        var el = jQuery(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    jQuery(function () {
        contentWayPoint();
    });
    
    //  YouTubePopUp
    jQuery("a.vid").YouTubePopUp();

    // MagnificPopup
    jQuery(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    jQuery('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    
});