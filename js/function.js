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

$(function () {
    const target1 = $("#parallaxmv");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.01;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax1");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax2");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax3");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax4");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax5");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax6");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});

$(function () {
    const target1 = $("#parallax7");
    const targetPosOT1 = target1.offset().top;
    const targetFactor = 0.1;
    const windowH = $(window).height();
    const scrollYStart1 = targetPosOT1 - windowH;
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
    });
});