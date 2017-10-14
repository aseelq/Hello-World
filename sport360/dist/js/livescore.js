$(document).ready(function () {
	var url = true;
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
        // $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
        $(".alllivesection").css("margin", "35px auto");
    }
    var flag = false;
    $("#toogle-details-down").click(function () {
        $(".alllivesection").css("margin", "70px auto");
        $(".up").slideDown('5000');
        $(".down").css("display", "none");
        // $(".results.owl-carousel .owl-stage-outer").css("height", "195px");
        $(this).closest(".result_block").find(".matchdetils").slideDown('slow');
    });
    $("#toogle-details-up").click(function () {
        $(".alllivesection").css("margin", "35px auto");
        $(".down").slideDown('5000');
        $(".up").css("display", "none");
        // $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
		// console.log($(this).closest(".result_block"));
        $(this).closest(".result_block").find(".matchdetils").slideUp('slow');
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
				$(this).find(".btn-select-input").val(target.attr('value'));
                $(this).find(".btn-select-value").html(value);

				var targetPanelseArea = $(this).closest(".filter_block").parent().children(".panel-group");
				targetPanelseArea.children(".panel").filter(function( el ) {
					if (value=="Show All") {
						$(this).show();
						return;
					}
					if ($(this).data("id") != value) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
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


// Gallery Inline Post Carousel
$(".gallery_inlbox .owl-carousel").owlCarousel({
	items: 1,
	thumbs: true,
    thumbsPrerendered: true
});


// Fixtures Carousel
$('.fixtures_block .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
	nav:true,
    items:1,
});

// Select Date Calender
$(function (){
	$('.datepickerClick').datepicker({
	   container: '.fixtures_block',
		autoclose: true
	}).on('changeDate', function(e) {
		console.log(e.date);
	});
});

/* Collapse Change Arrow Direction */
$('.panel-collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
});

//The reverse
$('.panel-collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
});
