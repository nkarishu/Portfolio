$(function () {

    // ハンバーガーメニューボタン
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotate-top');
        $('#btn__middle').toggleClass('hide-middle');
        $('#btn__bottom').toggleClass('rotate-bottom');
        $('#gnav').toggleClass('gnav-active');
        $('#gnav__nav').toggleClass('gnav__nav-active');
    });
    $('#gnav').on('click', function () {
        $('#gnav').removeClass('gnav-active');
        $('#gnav__nav').removeClass('gnav__nav-active');
    });

    //背景色を変える
    const viewHeight = $(window).height();

    $(window).on('scroll', function () {
        //スクロール位置を常に取得
        const ST = $(window).scrollTop();
        const target = $('.footer').offset().top;

        if (ST >= target - (viewHeight / 2)) {
            $('body').css('background', '#000');
        } else {
            $('body').css('background', '#fff');
        }
    });
});