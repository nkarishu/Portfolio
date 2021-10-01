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

    //モーダル
    $('#projects').on('click', '.projects__link', function(){
        const modal = $(this).attr('data-modal');
        
        $(modal).fadeIn(function(){
            $(this).on('click', function(){
                $(this).fadeOut();
            });

            const link = $(this).find('a'); //子の中のa要素を探す
            $(link).on('click', function(e){
                e.stopPropagation(); //親元にクリックを伝えない
                console.log(e);
            });
        });

        return false;
    });

    //footer背景色を変える
    const viewHeight = $(window).height();

    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();
        const target = $('.footer').offset().top;

        if (ST >= target - (viewHeight / 2)) {
            $('body').css('background', '#000');
        } else {
            $('body').css('background', '#fff');
        }
    });
});