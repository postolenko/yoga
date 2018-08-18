$(window).on("load",function(){

    getScrollBar();
    $(".scroll").mCustomScrollbar();

});

$(window).resize(function(){

    getScrollBar();
    setSliders();

});

$(document).ready(function() {

    setSliders();

    $(".slider_2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                fade: false,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
    
});


function getScrollBar() {

    if(bodyWidth >= 768 ) {

        if($(".main-nav").hasClass("mCustomScrollbar")) {
            $(".main-nav").mCustomScrollbar("destroy");
        }

    } else {

        $(".main-nav").mCustomScrollbar();

    }

}

function setSliders() {

    if(bodyWidth >= 768 ) {

        if( $(".slider-th_2").hasClass("slick-initialized") ) {

            $(".slider-th_2").slick("unslick");

        }

        if( $(".gallery").hasClass("slick-initialized") ) {

            $(".gallery").slick("unslick");

        }

    } else {

        if( !$(".slider-th_2").hasClass("slick-initialized") ) {

            $(".slider-th_2").not(".slick-initialized").slick({
                dots: false,
                arrows: false,
                // autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 2,
                slidesToScroll: 1
            });

        }

        if( !$(".gallery").hasClass("slick-initialized") ) {

            $(".gallery").not(".slick-initialized").slick({
                dots: false,
                arrows: true,
                // autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                ]
            });

        }

    }

}