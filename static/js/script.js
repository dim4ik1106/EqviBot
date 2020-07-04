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
            openMenu();
        } else {
            closeMenu();
        }
    });

    var video = document.getElementById('main-page-video');
    var mute = 'url(/static/img/mute-button.svg)';
    var unmute = 'url(/static/img/unmute-button.svg)';

    $('#video-play-button').click(function (e) {
        video.play();
        $(this).hide();
        $('#video-overlay').hide();
    });

    $('#main-page-video').click(function (e) {
        if (video.paused) {
            video.play();
            $('#video-play-button').hide();
            $('#video-overlay').hide();
        } else {
            video.pause();
            $('#video-play-button').show();
            $('#video-overlay').show();
        }
    });

    $('#volume-button').click(function (e) {
        if (video.muted) {
            video.muted = false;
            $('#volume-button').css('background-image', mute);
        } else {
            video.muted = true;
            $('#volume-button').css('background-image', unmute);
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