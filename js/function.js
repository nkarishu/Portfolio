$(function () {

    const viewHeight = $(window).height();
    const colors = ['#fff', '#fff', '#707070', '#000'];

    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        //bg color change
        $('section').each(function () {
            const target = $(this).offset().top;
            const index = $(this).index();

            if (ST >= target - (viewHeight / 2)) {
                $('#wrapper').css('background', colors[index]);
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

});