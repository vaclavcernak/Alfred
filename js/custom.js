

$(document).ready(function() {

    // CONTENT SLIDER
    var menu = ("#top_nav_menu");
    var slider = $("#content-wrap").lightSlider({
        item: 1,
        loop: false,
        slideMargin: 0,
        enableTouch:true,
        enableDrag:true,
        controls: false,
        pager: false,
        onBeforeSlide: function(el) {
            var i = (el.getCurrentSlideCount());
            $(menu + ' li.active').removeClass('active');
            $(menu + ' .slide-' + i ).addClass('active');

            // Horizontal scrolling menu on mobile
            switch (i) {
                case 1:
                    $(menu).animate({
                        left: 0,
                    }, 800);
                    break;
                case 2:
                    $(menu).animate({
                        left: -90,
                    }, 800);
                    break;
                case 3:
                    $(menu).animate({
                        left: -230,
                    }, 800);
                    break;
                case 4:
                    $(menu).animate({
                        left: -350,
                    }, 1000);
                    break;
                case 5:
                    $(menu).animate({
                        left: -430,
                    }, 800);
                    break;
                case 6:
                    $(menu).animate({
                        left: -480,
                    }, 800);
                    break;
            }
        }
    });

    // MENU

    $('#top_nav_menu li a').click(function(e){
        e.preventDefault();
    });

    $('.slide-1').click(function(){
        slider.goToSlide(0);
    });
    $('.slide-2').click(function(){
        slider.goToSlide(1);
    });
    $('.slide-3').click(function(){
        slider.goToSlide(2);
    });
    $('.slide-4').click(function(){
        slider.goToSlide(3);
    });
    $('.slide-5').click(function(){
        slider.goToSlide(4);
    });
    $('.slide-6').click(function(){
        slider.goToSlide(5);
    });

    $(menu).on('click', 'li', function() {
        $(menu + ' li.active').removeClass('active');
        $(this).addClass('active');
    });

    // SCROLL TOP NOTE ON MOBILE

    var screen = $(window);
    if (screen.width() < 575) {
        h_top = $('#top').outerHeight();
        h_nav = $('.top_nav').outerHeight();
        var h = h_top + h_nav;
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > h) {
                $('.top_claim').animate({
                    top: -h,
                }, 100 ,function () {
                    $('.top_claim').css("position","absolute");
                });
            }
            /*
            if ($(this).scrollTop() > 60) {
                $('.header').css("position","fixed");
                $('.top').css("margin-top","35px");
            } else {
                $('.top').css("margin-top","0px");
            }
            */
        });

    }


});