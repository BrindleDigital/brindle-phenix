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

jQuery(document).ready(function(){
    jQuery('.slick-center-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll:1,
	 autoplay: true,
	cssEase: 'ease-in-out',
		centerMode: true,
        centerPadding: '0px',
    });
});

/*Home V slider start*/
var swiper = new Swiper(".vertical-swiper", { direction: "vertical", effect: "fade", slidesPerView: 1, mousewheel: !0, keyboard: !0, loop: !1, speed: 1500, pagination: { el: ".swiper-pagination", clickable: true } });
swiper.on("reachEnd", function () {
    setTimeout(function () {
        jQuery(".disable_scroll").addClass("active");
    }, 2000);
});


jQuery(window).on("scroll", function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop == 0) {
                jQuery(".disable_scroll").removeClass("active");
            }
});
/*Home V slider end*/


/*Grid V slider start*/
var windowWidth = jQuery(window).width();

if(windowWidth>768){

        var swiper = new Swiper(".grid-vertical-swiper", { direction: "vertical", effect: "slide", slidesPerView: 1, mousewheel: !0, keyboard: 0, loop: !1, speed: 1500, pagination: { el: ".swiper-pagination", clickable: true,type: 'bullets' } });
        swiper.on("reachEnd", function () {
            setTimeout(function () {
                jQuery(".grid-disable_scroll").addClass("active");
            }, 2000);
        });

        swiper.on("slideChange", function () {

                if (swiper.activeIndex === 0) {
                    console.log('Reached 1 slide');
                    // Do something here
                    jQuery(".grid-disable_scroll").addClass("active");
                  }

        });

        const swiperElement = document.querySelector('.grid-vertical-swiper');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    jQuery(".grid-disable_scroll").removeClass("active");
                }else {
                    // When it's not visible (scrolling back up)
                    jQuery(".grid-disable_scroll").addClass("active");
                }
            });
        }, { threshold: 0.8 });

        observer.observe(swiperElement);
        
}
/*Grid V slider end*/

/*
jQuery(document).ready(function($){

    jQuery( ".view-list-kitchen" ).each(function( i ) {         
        if( jQuery(this).length )         // use this if you are using id to check
        {
            jQuery(this).children('p:gt(7)').hide();
        }
    });


   

    jQuery( '.view-more-kitchen' ).on( 'click', function( e ) {
        e.preventDefault();         
        jQuery(".view-list-kitchen").children('p:gt(7)').show();
        jQuery(this).hide();
    } );


});
*/


jQuery(document).ready(function ($) {
            const $pTags_1 = $('.view-list-kitchen-1 p');
            const $pTags_2 = $('.view-list-kitchen-2 p');
            const $pTags_3 = $('.view-list-kitchen-3 p');
           

            // Initially hide all p tags from the 8th one onward
            //$pTags_1.slice(7).hide();
            $pTags_2.slice(7).hide();
            //$pTags_3.slice(7).hide();
            let isExpanded = false;

            $('.view-more-kitchen').click(function () {
              if (!isExpanded) {
                //$pTags_1.show();
                $pTags_2.show();
               // $pTags_3.show();
                $(this).text('View Less');
              } else {
                //$pTags_1.slice(7).hide();
                $pTags_2.slice(7).hide();
                //$pTags_3.slice(7).hide();
                $(this).text('View More');
              }

              isExpanded = !isExpanded;
            });
});



