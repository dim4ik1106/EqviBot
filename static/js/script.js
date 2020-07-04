$(document).ready(function () {

    new WOW().init();

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        let money, val1, val2;
        if ($(window).width() < 690) {
            if (scrollTop > 1500 && scrollTop < 3000) {
                money = Math.floor(scrollTop / 10);
                val1 = Math.floor(scrollTop / 30);
                val2 = Math.floor(scrollTop / 80);
            }
        } else if ($(window).width() < 1100) {
            if (scrollTop > 1000 && scrollTop < 2000) {
                money = Math.floor(scrollTop / 10);
                val1 = Math.floor(scrollTop / 30);
                val2 = Math.floor(scrollTop / 80);
            }
        } else {
            if (scrollTop > 1700 && scrollTop < 3000) {
                money = Math.floor(scrollTop / 10);
                val1 = Math.floor(scrollTop / 30);
                val2 = Math.floor(scrollTop / 80);
            }
        }
        if (money) {
            $('.js-value-cont-blue').text('$ ' + money);
        }
        if (val1) {
            $('.js-value-cont-1').text(val1);
        }
        if (val2) {
            $('.js-value-cont-2').text(val2);
        }
    });


    $('.js-menu-btn').click(function (e) {
        if (!$('.right-menu').hasClass('active')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    $(document).click(function (e) {
        if (!$('.right-menu').is($(e.target)) &&
            $('.right-menu').find($(e.target)).length == 0 &&
            !$('.header__menu-button').is($(e.target)) &&
            !$('.header__log-in').is($(e.target))) {
            if ($('.right-menu').hasClass('active')) {
                closeMenu();
            }
        }
    });


});

function closeMenu() {
    $('.right-menu').removeClass('active');
    $('.js-overlay').removeClass('active');
    $('.right-menu').fadeOut();
    $('.js-overlay').fadeOut();
    $('body').removeClass('blocked');
    $('.header__logo').removeClass('white');
    if ($('.header__container').hasClass('white')) {
        $('.header__logo').addClass('white');
        $('.header__log-in').addClass('white');
        $('.header__menu-button').addClass('white');
    }
}

function openMenu() {
    if (!$('header').hasClass('mobile-white')) {
        $('.header__logo').addClass('white');
    }
    $('.right-menu').addClass('active');
    $('.right-menu').fadeIn();
    $('.js-overlay').addClass('active');
    $('.js-overlay').fadeIn();
    $('body').addClass('blocked');
    
    $('.header__log-in').removeClass('white');
    $('.header__menu-button').removeClass('white');
}