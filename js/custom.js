

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
            var wW= $(window).width();
            var mW= 320;
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
                        left: -77+((wW-mW)/2)
                    }, 800);
                    break;
                case 3:
                    $(menu).animate({
                        left: -222+((wW-mW)/2)
                    }, 800);
                    break;
                case 4:
                    $(menu).animate({
                        left: -317+((wW-mW)/2)
                    }, 1000);
                    break;
                case 5:
                    $(menu).animate({
                        left: -397+((wW-mW)/2)
                    }, 800);
                    break;
                case 6:
                    $(menu).animate({
                        left: -518+((wW-mW)/2)
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
        // Google + iOS APP banner
        $.smartbanner({
            title: 'Můj Alfred',
            author: 'PREVIO s.r.o.',
            icon: 'images/alfred-app.jpg',
            button: 'Otevřít',
            price: 'Zdarma', // Price of the app
            inAppStore: 'Na App Store', // Text of price for iOS
            inGooglePlay: 'Na Google Play', // Text of price for Android
            daysHidden: 0,
            daysReminder: 0,
            force: 'ios'
        });

        // SCROLL TOP NOTE ON MOBILE
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 80) {
                $('.top_claim').slideUp(1000);
                $('#top').css("padding-top","0");
               /* $('.top_claim').animate({
                    top: -h,
                }, 1000 ,function () {
                    //$('.top_claim').css("position","absolute");
                    $('#top').css("padding-top","0");
                });
                */
            }
/*
            if ($(this).scrollTop() > 60) {
                $('.header').css("position","fixed");
                $('.top').css("margin-top","35px");
            } else {
                $('.top').css("margin-top","55px");
            }
*/
        });

    }

});