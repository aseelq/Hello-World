$(document).ready(function () {
	var url = window.location.href.includes("/en");
    $('.owl-carousel').owlCarousel({
        rtl: !url,
        loop: true,
        autoplay: true,
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
    });

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
        $(".alllivesection").css("margin", "35px auto");
    }
    var flag = false;
    $("#toogle-details-down").click(function () {
        $(".alllivesection").css("margin", "70px auto");
        $(".up").slideDown('5000');
        $(".down").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "195px");
        $(".matchdetils").slideDown('slow');
    });
    $("#toogle-details-up").click(function () {
        $(".alllivesection").css("margin", "35px auto");
        $(".down").slideDown('5000');
        $(".up").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
        $(".matchdetils").slideUp('slow');
    });
    $("#toogle-details").click(function () {
        $(".matchdetils").toggle();
    });

    $("#read-more").click(function () {
        $("#paragraph-seemore-pointer").append('<style>#paragraph-seemore-pointer:before{content:none}</style>');
        $(".fade-out").css("max-height", "none");
        $("#read-more").hide();
        $(".aricle-cntent").css("padding-bottom", "10px");
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
    });
    $(".section").click(function () {
        $(".sections-area").css('display', 'inline-block');
        $(".section").css('background-color', 'white');
        $(".tags-area").css('display', 'none');
        $(".tag").css('background-color', '#f1f1f1');
    });
	
	
	$(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
    $('.btn-select').on('click', function (e) {
        e.preventDefault();
        var ul = $(this).find("ul");
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target)) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        } else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    });
});