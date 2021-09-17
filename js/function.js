$(function(){

    const viewHeight = $(window).height();
    const colors = ['#fff', '#fff', '#707070', '#000'];

    $(window).on('scroll',function(){
        const ST =  $(window).scrollTop();

        //bg color change
        $('section').each(function(){
            const target = $(this).offset().top;
            const index = $(this).index();

            if (ST >= target - (viewHeight / 2)) {
                $('#wrapper').css('background', colors[index]);
            }
        });

    });

});