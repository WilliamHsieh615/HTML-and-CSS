$(document).ready(function () {

    var showSkill = false;

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 1000);
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && targetPos + targetHeight > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });

        var skillTop = $('#skills').position().top;
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            $('#skills .progress-bar').each(function () {
                var thisValue = $(this).data('progress');
                $(this).css('width', thisValue + '%');
            });
        }

        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if ((scrollPos + windowHeight) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });

        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px')
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')

    });

});