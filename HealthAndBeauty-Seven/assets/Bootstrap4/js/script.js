﻿
/*================== Read More Text ==================*/

$(function () {
    var showChar = 750;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink btn btn-read-more mt-30 mb-3 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


$(function () {
    var showChar = 253;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinks read-text mt-30 mb-3 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

$(function () {
    var showChar = 650;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-spacess').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinkss btn btn-read-more mt-30 mb-3 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

$(function () {
    $('#work .btn-filter').on('click',
        function () {
            $('.btn-filter').removeClass('active-bg');
            $(this).addClass('active-bg');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 3,
        showItems: 3
    });


});

/*===================== Owl Carousel Slider ======================*/
//Init the carousel
$(function () {
    $('#owl-one').owlCarousel({
        loop: true,
        margin: 24,
        dots: false,
        nav: true,
        slideBy: 1,
        item: 1,
        navText: ["<i class='flaticon-left-arrow-key'> </i>", "<i class='flaticon-keyboard-right-arrow-button'> </i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
            },
            400: {
                items: 1,
                dots: false,
                nav: true,
            },
            600: {
                items: 1,
                dots: false,
                nav: true
            },
            768: {
                items: 1,
                dots: false,
                nav: true
            },
            830: {
                items: 1,
                dots: false,
                nav: true
            },
            1000: {
                items: 1,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        slideBy: 1,
        item: 1,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            400: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: true
            },
            768: {
                items: 1,
                dots: true,
                nav: false,
            },
            830: {
                items: 1,
                dots: true,
                nav: false,
            },
            1000: {
                items: 1,
                dots: true,
                nav: false,
            }
        }
    });
});

/*===================== Scroll Top Function Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("");

        } else {
            $("nav").removeClass("");


        }


    });
});

/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 6).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 3).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});


/*===================== Filter Section Script ======================*/
//$(function () {

//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();
//        if (scroll >= 100) {
//            $("nav").addClass("nav-bg-color");

//        } else {
//            $("nav").removeClass("nav-bg-color");


//        }


//    });
//});
