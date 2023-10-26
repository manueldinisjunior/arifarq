(function ($) {
	'use strict';
	
	// ==========================================================
	// Detect mobile device and add class "is-mobile" to </body>
	// ==========================================================

	var isMobile = false;
	if ("maxTouchPoints" in navigator) {
	isMobile = navigator.maxTouchPoints > 0;
	} else if ("msMaxTouchPoints" in navigator) {
	isMobile = navigator.msMaxTouchPoints > 0;
	} else {
	const mQ = matchMedia?.("(pointer:coarse)");
	if (mQ?.media === "(pointer:coarse)") {
	isMobile = !!mQ.matches;
	} else if ("orientation" in window) {
	isMobile = true; // deprecated, but good fallback
	} else {
	// Only as a last resort, fall back to user agent sniffing
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini|Tablet|Mobile/i.test(navigator.userAgent);
	 }
	}
	// Add class "is-mobile" to </body>
	if(isMobile) {
		jQuery("body").addClass("is-mobile");
		
		jQuery(".bn-if-permalink-off  li > span i.ti-angle-right").replaceWith(function() { return "<i class='ti-angle-down'>" + this.innerHTML + "</i>"; });
		// Sub Menu 
		jQuery('.bn-classic-menu-class:not(.bn-if-permalink-ul) li.dropdown.menu-item-has-children > span, .bn-classic-menu-class:not(.bn-if-permalink-ul) li.dropdown.menu-item-has-children > span, .bn-classic-menu-class:not(.bn-if-permalink-ul) li.dropdown-item.menu-item-has-children > span, .bn-classic-menu-class:not(.bn-if-permalink-ul) li.dropdown-item.menu-item-has-children > span').on('click', function () {
			
			var element = jQuery(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
		//if menu permalink
		if (jQuery('.bn-if-permalink').length) {
		var bauenHeader = jQuery('.bn-if-permalink'),
			bauenHeaderHeight = bauenHeader.height(),
			bauenMenuListWrapper = jQuery('.bn-if-permalink > ul'),
			bauenMenuListDropdown = jQuery('.bn-if-permalink ul li:has(ul)');
		bauenMenuListDropdown.each(function(){
			jQuery(this).append( '<span class="dropdown-plus"></span>' );
			jQuery(this).addClass('dropdown_menu');
		});
		jQuery('.dropdown-plus').on("click", function(){
			jQuery(this).prev('ul').slideToggle(300);
			jQuery(this).toggleClass('dropdown-open');
		});
		
		jQuery(".bn-if-permalink-ul li.menu-item-has-children > a i").replaceWith(function() { return "<span'>" + this.innerHTML + "</span>"; });
		}
		
	}
	
})(jQuery); 