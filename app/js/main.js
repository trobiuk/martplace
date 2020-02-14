$(function() {

    // start jQuery Form Styler
    $('.search__box select').styler();
    // end jQuery Form Styler


    // start Rate Yo!
    var starArr = [];

    $('.active-star').each(function(index, item) {
        if ($(item).text() != '') {
            starArr[index] = Number($(item).text());
        } else starArr[index] = -1;
    });

    $(".slider-featured__item-description-functional-star").rateYo({
        starWidth: "15px",
        readOnly: true,
        spacing: "3px"
    });

    $(".product-item__info-star").rateYo({
        starWidth: "12px",
        readOnly: true,
        spacing: "4px"
    });

    $('.active-star').each(function(index, item) {
        var star = starArr[index];
        (star >= 0 && star <= 5) ? $(item).rateYo("option", "rating", star): $(item).text('');
    });
    // end Rate Yo!


    // start slider-featured
    $('.slider-featured__inner').slick({
        appendArrows: $('.slider-featured__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right.svg" alt=""></button>'
    });
    // start slider-featured


    // start filter mixitup
    var mixer = mixitup('.new-products__list');
    // end filter mixitup


    // start slider-followers
    $('.slider-followers__inner').slick({
        appendArrows: $('.slider-followers__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right.svg" alt=""></button>',
        slidesToShow: 3,
        slidesToScroll: 3
    });
    // end slider-followers







});