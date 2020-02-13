$(function() {

    $('.search__box select').styler();

    $(".slider-featured__item-description-functional-star").rateYo({
        starWidth: "15px",
        rating: 4.5,
        readOnly: true,
        spacing: "3px"
    });

    $(".product-item__info-star.active-star").rateYo({
        starWidth: "12px",
        rating: 4.5,
        readOnly: true,
        spacing: "4px"
    });


    $('.slider-featured__inner').slick({
        appendArrows: $('.slider-featured__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right.svg" alt=""></button>'
    });

    var mixer = mixitup('.new-products__list');

    $('.slider-followers__inner').slick({
        appendArrows: $('.slider-followers__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right.svg" alt=""></button>',
        slidesToShow: 3,
        slidesToScroll: 3
    });







});