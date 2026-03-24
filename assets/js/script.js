//---------------Headroom---------------------//

/*
(function() {
    var header = new Headroom(document.querySelector("header"), {
           offset:0,
    tolerance: 100,
    classes: {
      initial: "animated",
      //pinned: "slideUp",
      unpinned: "slideDown"
    }
    });
    header.init();
}());*/




//---------Menu Toggle-----------//

jQuery(document).ready(function(){
			  jQuery('.slide-in-open, .slide-in-close').click(function(){
				  jQuery(this).toggleClass('open');
				  jQuery('.slide-in-menu-container').toggleClass('slide-in-menu');
				  jQuery('body').toggleClass('menu-open');
			  });
			// Close menu when clicking any menu item
			jQuery('#menu-hamburger-menu li a').on('click', function () { 
				jQuery('.slide-in-open, .slide-in-close').removeClass('open');
				jQuery('.slide-in-menu-container').removeClass('slide-in-menu');
				jQuery('body').removeClass('menu-open');
			});
});


/* AOS  Animate*/
jQuery(document).ready(function(){
  AOS.init({disable: 'mobile'});
});

window.addEventListener('load', AOS.refresh);


/* slick*/
jQuery(document).ready(function(){
    jQuery('.testimonial-slider').slick({
     	slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        speed: 1000,              // Transition speed (0.7 sec)
        autoplay: true,
        autoplaySpeed: 4000,     // Time between slides (4 sec)
        arrows: true,
        dots: false,
        pauseOnHover: true,
		nextArrow: '.custom-next-btn',
		prevArrow: '.custom-prev-btn',
    });
});



jQuery(document).ready(function(){
    jQuery('.hp-carousel').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll:1,
	    autoplay: true,
	    cssEase: 'ease-in-out',
	    variableWidth: true,
		      responsive: [
          {
          breakpoint: 767,
          settings: {
             variableWidth: false,
          }
      }
     ]
    });
});

jQuery(document).ready(function($){
  let isExpanded = true;
    var windowWidth = jQuery( window ).width();
    if (windowWidth <= 768) {
        if (jQuery('.show-more-colum').length) {
          jQuery('.show-more-colum').hide();
        }
    }

    jQuery('.show-more-btn').click(function ($) {
      if (!isExpanded) {
        jQuery('.show-more-colum').hide();
        jQuery(this).text('Show More');
      }else{
        jQuery('.show-more-colum').show();
        jQuery(this).text('Show Less');
      }
      isExpanded = !isExpanded;

      
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const splideElement = document.querySelector('.vertical-splide');
    // Check if element exists
    if (splideElement) {
      const splide = new Splide(splideElement, {
        pagination: false,
        arrows: false,
        type: 'loop',
        direction: 'ttb', // vertical
        height: 'auto',
        gap: '15px',
        wheel: false, // disable mouse wheel
        drag: false,  // disable mouse drag
        swipe: false, // disable touch swipe
        autoScroll: {
          speed: 0.5,
          autoStart: true,
          pauseOnHover: false,
        },
      });
      splide.mount(window.splide.Extensions);  
    }

});

    document.addEventListener('DOMContentLoaded', function () {
      const splideElement = document.querySelector('.vertical-splide-reverse');
      if (splideElement) {
        const splide = new Splide(splideElement, {
          pagination: false,
          arrows: false,
          type      : 'loop',
          direction : 'ttb',
          height    : 'auto',
          gap: '15px',
          wheel: false, // disable mouse wheel
          drag: false,  // disable mouse drag
          swipe: false, // disable touch swipe

          autoScroll: {
          speed: -0.5,
          autoStart   : true,
          pauseOnHover: false,
        },
      });
      splide.mount(window.splide.Extensions);   
        }
    });

	     document.addEventListener('DOMContentLoaded', function () {
        const splideElement = document.querySelector('.carousel-splide');
        if (splideElement) {
           const splide = new Splide(splideElement, {
           pagination: false,
           arrows: false,
           type      : 'loop',
           // height    : 'auto',
           gap: '20px',
		       drag   : 'false',
		       autoWidth: true,
           //start  : 3,
           // rewind: true,
           autoScroll: {
              speed    : 0.5,        // Transition duration
              autoStart   : true,
              pauseOnHover: false,
          },
		
	       breakpoints: {
		        767: {
			        gap: '12px',
		        },
	       },		
        });

        splide.mount(window.splide.Extensions);
      }
     });


	     document.addEventListener('DOMContentLoaded', function () {
      const splideElement = document.querySelector('.carousel-splide-reverse'); 
       if (splideElement) {
            const splide = new Splide(splideElement, {
            pagination: false,
            arrows: false,
            type      : 'loop',
            // height    : 'auto',
            gap: '20px',
		        drag   : 'false',
		        autoWidth: true,
            //start  : 3,
            // rewind: true,

            autoScroll: {
		           speed: -0.5,
               autoStart   : true,
               pauseOnHover: false,
            },
		
		
		        breakpoints: {
		           767: {
			             gap: '12px',
		        },
	          },
           });

          splide.mount(window.splide.Extensions);
      }
  });


jQuery(document).ready(function() {
  jQuery('.popup-gallery-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
	  closeOnBgClick:true, 
	  closeMarkup: '<button title="%title%" type="button" class="mfp-close custom-close-svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></button>',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] ,// Will preload 0 - before current, and 1 after the current image
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></button>',
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        //return item.el.attr('title');
      }
    }
  });
});



