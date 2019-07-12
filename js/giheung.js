$(document).ready(function () {
    $('.gnb1deth').mouseenter(function () {
        $(this).find('.gnb2deth').fadeIn();
        $(this).parents('.headerWrap').find('.gnb_back').fadeIn();
        $(this).parents('#wrap').find('.containerWrap .contentWrap_1').children('.quickMenu').css({
            'z-index': '-99',
            'opacity': '0.5',
            'transition': 'all 0.5s ease-in-out'
        })
    })

    $('.gnb1deth').mouseleave(function () {
        $(this).find('.gnb2deth').fadeOut();
        $(this).parents('.headerWrap').find('.gnb_back').fadeOut();
        $(this).parents('#wrap').find('.containerWrap .contentWrap_1').children('.quickMenu').css({
            'z-index': '3',
            'opacity': '1',
            'transition': 'all 0.2s ease-in-out'
        })
    })

    $('.yoninSearchBox').click(function () {
        $(this).val("")
    })
    $('.peopleSearch').click(function () {
        $(this).val("")
    })
})



$('.giheungInfo > li > ul').not(':first').hide();
$('.giheungInfo > li > h3').click(function (e) {
    e.preventDefault();
    $('.giheungInfo > li > h3.on').removeClass('on');
    $(this).addClass('on');
    $('.giheungInfo > li > ul').hide();
    $(this).next('ul').show();
})




$(document).ready(function () {
    var st;

    function autobanner() {
        $('.bannerimgWrap').animate({
            left: '-108px'
        }, 1500, function () {
            $('.bannerimgWrap').append($('.bannerimgWrap li:first'))
            $('.bannerimgWrap').css('left', '0px');
        })
    }

    $('.bannerBtnWrap .btn_stop').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn_stop') == true) {
            clearInterval(st);
            $(this).removeClass();
            $(this).addClass('btn_play')
        } else {
            clearInterval(st);
            st = setInterval(autobanner, 2000);
            $(this).removeClass();
            $(this).addClass('btn_stop')
        }

    })

    $('.bannerWrap .btn_left').click(function (e) {
        e.preventDefault();
        $('.bannerimgWrap').prepend($('.bannerimgWrap li:last'))
    })


    $('.bannerWrap .btn_right').click(function (e) {
        e.preventDefault();
        $('.bannerimgWrap').append($('.bannerimgWrap li:first'))
    })


    st = setInterval(autobanner, 2000)








    var currentNum = 1;
    var num = setInterval(autopopup, 4000);

    function autopopup() {
        $('.popimg').stop().animate({
            left: '-354px'
        }, 1500, function () {
            $('.popimg').append($('.popimg li:first'))
            $('.popimg').css('left', '0px');
        })

        $('.poptxt').stop().animate({
            left: '-360px'
        }, 1500, function () {
            $('.poptxt').append($('.poptxt li:first'))
            $('.poptxt').css('left', '0px');
        })
    }


    $('.rightContent_2 .btn_stop').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn_stop') == true) {
            clearInterval(num);
            $(this).removeClass();
            $(this).addClass('btn_play')

        } else {
            clearInterval(num);
            num = setInterval(autopopup, 4000);
            $(this).removeClass();
            $(this).addClass('btn_stop')
        }

    })

    $('.rightContent_2 .btn_left').click(function (e) {
        e.preventDefault();
        $('.popimg').prepend($('.popimg li:last'))
        $('.poptxt').prepend($('.poptxt li:last'))
    })


    $('.rightContent_2 .btn_right').click(function (e) {
        e.preventDefault();
        $('.popimg').append($('.popimg li:first'))
        $('.poptxt').append($('.poptxt li:first'))
    })





})
