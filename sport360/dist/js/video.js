$(document).ready(function () {
    $el = $('#paragraph-seemore-pointer');
    var bottom = $el.position().top + $el.outerHeight(true);
    $(".fade-out").css("max-height", bottom + 'px');
    var url = window.location.href.includes("/en");
    $('.owl-carousel').owlCarousel({
        rtl: !url,
        loop: true,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })
    if (url) {
        $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
        $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
    } else {
        $(".owl-prev").html('<i class="fa fa-chevron-right fa-2x"></i>');
        $(".owl-next").html('<i class="fa fa-chevron-left fa-2x"></i>');
    }

    $("#read-more").click(function () {
        $(".fade-out").append('<style>.fade-out:before{content:none}</style>');
        $(".fade-out").css("max-height", "none");
        $(".content").css("height", "100%");
        $("#read-more").hide();
        $('.text-center').css('margin-bottom', '20px');
    });
    $(".more_icon").click(function () {
        $('.more_icon').css("display", "none");
        $('.show_icon').css("display", "inline-block");
    });
    $(".more_icon_inside").click(function () {
        $('.more_icon_inside').css("display", "none");
        $('.show_icon_inside').css("display", "inline-block");
    });

    $(".tag").click(function () {
        $(".sections-area").css('display', 'none');
        $(".section").css('background-color', '#f1f1f1');
        $(".tags-area").css('display', 'inline-block');
        $(".tag").css('background-color', 'white');
    })
    $(".section").click(function () {
        $(".sections-area").css('display', 'inline-block');
        $(".section").css('background-color', 'white');
        $(".tags-area").css('display', 'none');
        $(".tag").css('background-color', '#f1f1f1');
    })
});