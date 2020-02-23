$(function() {

    // start jQuery Form Styler
    $('.search__box select').styler();
    $('.category-page__filter-settings select').styler();
    // end jQuery Form Styler

    function bgBox(whatClick, whoShow) {
        $(whoShow).attr('data-visible-box', 'false');
        $(whatClick + '-close').attr('data-visible-icon-close', 'false');

        $(whatClick + '-open').on('click', function(e) {
            e.stopPropagation();

            $(this).css('display', 'none');

            $('[data-visible-icon-close="true"]').each(function(index, item) {
                $(item).css('display', 'none').attr('data-visible-icon-close', 'false');
                $(item).prev().css('display', 'block');
            });
            $('[data-visible-box="true"]').each(function(index, item) {
                $(item).slideToggle().attr('data-visible-box', 'false');
            });

            $(whatClick + '-close').css('display', 'block').attr('data-visible-icon-close', 'true');

            $(whoShow).attr('data-visible-box', 'true').slideToggle();

            $('body').on('click', function(e) {
                if ($(whoShow).attr('data-visible-box') == 'true' && !$(e.target).closest('.header__wrapper-arrow').length) {
                    $(whoShow).slideToggle().attr('data-visible-box', 'false');
                    $(whatClick + '-open').css('display', 'block');
                    $(whatClick + '-close').css('display', 'none').attr('data-visible-icon-close', 'false');
                }
            });
        });

        $(whatClick + '-close').on('click', function(e) {
            e.stopPropagation();
            $(whoShow).slideToggle().attr('data-visible-box', 'false');
            $(this).css('display', 'none').attr('data-visible-icon-close', 'false');
            $(whatClick + '-open').css('display', 'block');
        });
    }

    // start header
    bgBox('.header__alarm', '.slide-menu__notifications');
    bgBox('.header__envelope', '.slide-menu__envelope');
    bgBox('.header__cart', '.slide-menu__cart');
    bgBox('.header__shopper-info', '.shoper-info-box');

    $('.header__user-open-btn').on('click', function() {

        $('.header__top-mobile-box').animate({
            right: '0px'
        }, 500);

        $('.bg-box__210').css('display', 'block');

        $('.header__user-close-btn, .bg-box__210').on('click', function() {
            $('.header__top-mobile-box').animate({
                right: '-420px'
            }, 500);
            $('.bg-box__210').css('display', 'none');
            $(this).off('click');
        });

    });


    $('.header__inner .header__btn-menu').on('click', function() {
        $(this).toggleClass("change");
        $('.header__menu').slideToggle();
    });

    // end header

    // start Rate Yo!
    var starArr = [];

    $('.active-star').each(function(index, item) {
        starArr[index] = ($(item).text() != '') ? Number($(item).text()) : -1;
    });

    $(".slider-featured__item-description-functional-star").rateYo({
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000",
        normalFill: "#fff"
    });

    $(".product-item__info-star").rateYo({
        starWidth: "12px",
        readOnly: true,
        spacing: "4px",
        ratedFill: "#ffc000",
        normalFill: "#fff"
    });

    $(".category-page__product-item-star").rateYo({
        starWidth: "13px",
        readOnly: true,
        spacing: "6px",
        ratedFill: "#ffc000",
        normalFill: "#fff"
    });
    $(".product-statistics__list-item-star").rateYo({
        starWidth: "15px",
        readOnly: true,
        spacing: "6px",
        ratedFill: "#ffc000",
        normalFill: "#fff"
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
    $('.new-products__filter-by-btn').on('click', function(e) {
        $(this).css('backgroundColor', '#f1f3f6');
        $('.new-products__filter-by-list').slideToggle();
        e.stopPropagation();
        $('body').on('click', function() {
            $('.new-products__filter-by-list').slideToggle();
            $(this).off('click');
        });
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

    //start tabs

    $('.product-card__product-tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    //end tabs







});