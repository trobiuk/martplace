$(function() {

    $('.search__box select').styler();

    $(".slider-featured__item-star").rateYo({
        starWidth: "14px",
        rating: 4.5,
        readOnly: true
    });

    $('.slider-featured__inner').slick({
        appendArrows: $('.slider-featured__btn'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right.svg" alt=""></button>'
    });







});