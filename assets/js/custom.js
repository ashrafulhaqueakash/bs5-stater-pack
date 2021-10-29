'use strict'

if (jQuery(".hero-area__slider").length > 0) {
    $(".hero-area__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        arrows: true,
        fade: true,
    });
}