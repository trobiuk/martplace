$(function() {

    // start jQuery Form Styler
    $('.search__box select').styler();
    $('.category-page__filter-settings select').styler();
    // $('.filter-products__list input[type="radio"]').styler({
    //     selectSearch: true
    // });
    // end jQuery Form Styler


    // start Rate Yo!
    var starArr = [];

    $('.active-star').each(function(index, item) {
        starArr[index] = ($(item).text() != '') ? Number($(item).text()) : -1;
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

    $(".category-page__product-item-star").rateYo({
        starWidth: "13px",
        readOnly: true,
        spacing: "6px"
    });

    $(".list .category-page__product-item-star").rateYo("option", "spacing", "8px");

    $('.active-star').each(function(index, item) {
        var star = starArr[index];
        (star >= 0 && star <= 5) ? $(item).rateYo("option", "rating", star): $(item).text('');
    });
    // end Rate Yo!


    // start slider-featured
    $('.slider-featured__inner').slick({
        appendArrows: $('.slider-featured__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    // start slider-featured


    // start filter mixitup
    $('.new-products__filter-by-btn').on('click', function() {
        $(this).css({
            backgroundColor: '#f1f3f6'
        });
        $('.new-products__filter-by-bg-box').css({
            display: 'block'
        });
        $('.new-products__filter-by-list').slideToggle();
    });
    $('.new-products__filter-by-bg-box').on('click', function() {
        $(this).css({
            display: 'none'
        });
        $('.new-products__filter-by-btn').css({
            backgroundColor: 'transparent'
        });
        $('.new-products__filter-by-list').slideToggle();
    });


    var mixer = $('.new-products__list').length ? mixitup('.new-products__list') : false;
    // end filter mixitup


    // start slider-followers
    $('.slider-followers__inner').slick({
        appendArrows: $('.slider-followers__box-top-btn'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 3
    });
    // end slider-followers


    // start whow or hide aside__item
    $('.aside__item button').on('click', function() {
        $(this).parent().next().slideToggle();
        $(this).toggleClass('rotate-btn');
    });
    // end whow or hide aside__item

    // start ionRangeSlider
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });
    // end ionRangeSlider

    // start product-list
    $('.catalog-page__filter-settings-icons-list').on('click', function() {
        $(this).addClass('active-icon');
        $('.catalog-page__filter-settings-icons-grid').removeClass('active-icon');
        $('.category-page__product-item').addClass('list');
    });

    $('.catalog-page__filter-settings-icons-grid').on('click', function() {
        $(this).addClass('active-icon');
        $('.catalog-page__filter-settings-icons-list').removeClass('active-icon');
        $('.category-page__product-item').removeClass('list');
    });

    // end product-list







});