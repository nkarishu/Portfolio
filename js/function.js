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
        $('#btn__top').removeClass('rotate-top');
        $('#btn__middle').removeClass('hide-middle');
        $('#btn__bottom').removeClass('rotate-bottom');
    });

    // スムーススクロール
    $('#gnav').on('click', '.gnav__link', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({
            'scrollTop': targetPos
        }, 800);
    });

    //fadein
    $(window).scroll(function () {
        $('.fadein').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

    //モーダル
    $('#openModal').on('click', '.projects__box', function () {
        const modal = $(this).attr('data-modal');
        $(modal).fadeIn();

        $('#closeModal').on('click', '.modal__wrap', function () {
            $(modal).fadeOut();
        });
    });


    //モーダル内ホバー
    $(".modal__img").hover(
        function () {
            var imgWidth = $(this).width();
            var imgHeight = $(this).height();
            $(this).stop(true).animate({
                'top': -imgHeight + 200
            }, imgHeight * 5);
        },
        function () {
            var imgWidth = $(this).width();
            var imgHeight = $(this).height();
            $(this).stop(true).animate({
                'top': 0
            }, imgHeight * 2);
        });


    //footer背景色を変える
    const viewHeight = $(window).height();

    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();
        const target = $('.footer').offset().top;

        if (ST >= target - (viewHeight / 2)) {
            $('body').css('background', 'rgb(159, 212, 154');
        } else {
            $('body').css('background', '#fff');
        }
    });
});