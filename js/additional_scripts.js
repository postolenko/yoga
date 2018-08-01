$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$(".gallery-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

});

