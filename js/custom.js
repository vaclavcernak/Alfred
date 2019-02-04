

$(document).ready(function() {

    // CONTENT SLIDER
    var menu = ("#top_nav_menu");
    var menu_cz = (".cz #top_nav_menu");
    var menu_en = (".en #top_nav_menu");
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

            // carousel controls
            if (i > 1) {
                $('.prev-slide').show();
            } else {
                $('.prev-slide').hide();
            }

            if (i > 5) {
                $('.next-slide').hide();
            } else {
                $('.next-slide').show();
            }

            // Horizontal scrolling menu on mobile
            switch (i) {
                case 1:
                    $(menu_cz).animate({
                        left: 60+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: 20+((wW-mW)/2)
                    }, 300);
                    break;
                case 2:
                    $(menu_cz).animate({
                        left: -77+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: -170+((wW-mW)/2)
                    }, 300);
                    break;
                case 3:
                    $(menu_cz).animate({
                        left: -222+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: -317+((wW-mW)/2)
                    }, 300);
                    break;
                case 4:
                    $(menu_cz).animate({
                        left: -317+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: -430+((wW-mW)/2)
                    }, 300);
                    break;
                case 5:
                    $(menu_cz).animate({
                        left: -397+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: -510+((wW-mW)/2)
                    }, 300);
                    break;
                case 6:
                    $(menu_cz).animate({
                        left: -518+((wW-mW)/2)
                    }, 300);
                    $(menu_en).animate({
                        left: -610+((wW-mW)/2)
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

    $('.prev-slide').click(function(){
        slider.goToPrevSlide();
    });
    $('.next-slide').click(function(){
        slider.goToNextSlide();
    });

    var screen = $(window);
    if (screen.width() <= 575) {
        // MOBILE MENU INIT POSITION
        var wW= $(window).width();
        var mW= 320;
        $(menu_cz).css("left", 60+((wW-mW)/2));
        $(menu_en).css("left", 20+((wW-mW)/2));

    }

    // Languages

    if ($(window).width() <= 1200) {
        var langpull = $('#language li:first-child');
        var langmenu = $('#language');

        $(langpull).on('click', function(e) {
            e.preventDefault();
            langmenu.toggleClass('langdrop');
        });
    }

});