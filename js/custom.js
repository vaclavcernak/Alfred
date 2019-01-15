

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
                        left: 60+((wW-mW)/2)
                    }, 300);
                    break;
                case 2:
                    $(menu).animate({
                        left: -77+((wW-mW)/2)
                    }, 300);
                    break;
                case 3:
                    $(menu).animate({
                        left: -222+((wW-mW)/2)
                    }, 300);
                    break;
                case 4:
                    $(menu).animate({
                        left: -317+((wW-mW)/2)
                    }, 300);
                    break;
                case 5:
                    $(menu).animate({
                        left: -397+((wW-mW)/2)
                    }, 300);
                    break;
                case 6:
                    $(menu).animate({
                        left: -518+((wW-mW)/2)
                    }, 300);
                    break;
            }
        }
    });

    // MENU

    $('#top_nav_menu li a').bind("click touchstart", function(e){
        e.preventDefault();
    });

    $('.slide-1 a').bind("click touchstart", function(){
        slider.goToSlide(0);
    });
    $('.slide-2 a').bind("click touchstart", function(){
        slider.goToSlide(1);
    });
    $('.slide-3 a').bind("click touchstart", function(){
        slider.goToSlide(2);
    });
    $('.slide-4 a').bind("click touchstart", function(){
        slider.goToSlide(3);
    });
    $('.slide-5 a').bind("click touchstart", function(){
        slider.goToSlide(4);
    });
    $('.slide-6 a').bind("click touchstart", function(){
        slider.goToSlide(5);
    });

    $(menu + ' li').bind("click touchstart", function(){
        $(menu + ' li.active').removeClass('active');
        $(this).addClass('active');
    });

    // ON MOBILE BEHAVIOR

    var screen = $(window);
    if (screen.width() <= 575) {
        // MOBILE MENU INIT POSITION
        var wW= $(window).width();
        var mW= 320;
        $(menu).css("left", 60+((wW-mW)/2));

        // Google + iOS APP banner
        var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;
        $.smartbanner({
            title: 'My Alfred',
            author: 'PREVIO s.r.o.',
            icon: 'images/alfred-app.jpg',
            button: 'Otevřít',
            price: 'Zdarma', // Price of the app
            inAppStore: 'Na App Store', // Text of price for iOS
            inGooglePlay: 'Na Google Play', // Text of price for Android
            force: android ? 'android' : 'ios',
            daysHidden: 0,
            daysReminder: 0,
        });

        // SCROLL TOP NOTE ON MOBILE
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 0) {
                $('.top_claim').slideUp(1000);
            } else {
                $('.top_claim').slideDown(1000);
            }
        });

    }

});