$(document).ready(function () {
    $("#sidebar").stick_in_parent({
        offset_top: $("#masthead").height()
    });
    var url = window.location.href.includes("/en");
    $('.results.owl-carousel').owlCarousel({
        rtl: !url,
        loop: true,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
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
                items: 6,
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
    if ($(window).width() < 960) {
        $(".matchdetils").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
        $(".alllive").css("margin", "35px auto");
    }
    var flag = false;
    $("#toogle-details-down").click(function () {
        $(".alllive").css("margin", "70px auto");
        $(".up").slideDown('5000');
        $(".down").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "195px");
        $(".matchdetils").slideDown('slow');
    });
    $("#toogle-details-up").click(function () {
        $(".alllive").css("margin", "35px auto");
        $(".down").slideDown('5000');
        $(".up").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
        $(".matchdetils").slideUp('slow');
    });
});