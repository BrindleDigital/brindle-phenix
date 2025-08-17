//---------------Headroom---------------------//


document.addEventListener("DOMContentLoaded", function () {
   var windowWidth = jQuery( window ).width();
   if (windowWidth >= 768) {
        var myHeader = document.querySelector("header"); // Change this selector as needed
        var headroom = new Headroom(myHeader, {
            tolerance: 5,
            offset: 300,
            classes: {
                initial: "animated",
               // pinned: "slideUp",
              unpinned: "slideDown",
                top: "headroom--top",
                notTop: "headroom--not-top",
            }
        });
        headroom.init();
    }
});


//---------Menu Toggle-----------//

jQuery(document).ready(function(){
  jQuery('.slide-in-open, .slide-in-close').click(function(){
      jQuery(this).toggleClass('open');
      jQuery('.slide-in-menu-container').toggleClass('slide-in-menu');
      jQuery('body').toggleClass('menu-open');
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


/*
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.vertical-splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
	  direction: 'ttb', 
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  }).mount( window.splide.Extensions );
});
*/


 document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.vertical-splide', {
       pagination: false,
       arrows: false,
      type      : 'loop',
      direction : 'ttb',
      height    : 'auto',
        gap: '15px',
       // rewind: true,
		 drag   : 'false',
      autoScroll: {
        //interval : 24000,       // Time between slides in ms (default: 5000)
        speed    : 0.5,        // Transition duration
        autoStart   : true,
        pauseOnHover: false,
      },
    });

    splide.mount(window.splide.Extensions);
  });

      document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.vertical-splide-reverse', {
       pagination: false,
       arrows: false,
      type      : 'loop',
      direction : 'ttb',
      height    : 'auto',
        gap: '15px',
		drag   : 'false',
        //start  : 3,
       // rewind: true,

      autoScroll: {
        speed: -0.5,
        autoStart   : true,
        pauseOnHover: false,
      },
    });

    splide.mount(window.splide.Extensions);
  });

	     document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.carousel-splide', {
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
  });


	     document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.carousel-splide-reverse', {
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
  });


jQuery(document).ready(function() {
  jQuery('.popup-gallery-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
	closeOnBgClick:false, 
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



