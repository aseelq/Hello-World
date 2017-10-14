$(document).ready(function () {
    $el = $('#paragraph-seemore-pointer');
    var bottom = $el.position().top + $el.outerHeight(true);
    $(".fade-out").css("max-height", bottom + 'px');

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
        $(".matchdetils").slideDown('slow');
    });
    $("#toogle-details-up").click(function () {
        $(".alllivesection").css("margin", "35px auto");
        $(".down").slideDown('5000');
        $(".up").css("display", "none");
        // $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
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
    })
    $(".section").click(function () {
        $(".sections-area").css('display', 'inline-block');
        $(".section").css('background-color', 'white');
        $(".tags-area").css('display', 'none');
        $(".tag").css('background-color', '#f1f1f1');
    })

	$('.related .owl-carousel').owlCarousel({
		loop:false,
		margin:15,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			959:{
				items:2
			}
		}
});


    /* Gallery Inline Post Carousel, and outline Modal box */
// General Carousel Setting
    $(".gallery_inlbox .owl-carousel, .gallery_outbox .owl-carousel").owlCarousel({
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        nav: true
    });

// Display repaet view at outline Modal box when carousel at last slide
    $('.gallery_outbox .owl-carousel').on('change.owl.carousel', function (e) {
		if (e.namespace && e.property.name === 'position'
			&& e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1) {

			$('.gallery_outbox').addClass('hide').hide();
			$('.gallery_repeated').removeClass('hide').show();
			$('.btn_repeat').parent('p').removeClass('hide');

		}
	});

// Show Carousel when click on Repeat button 
	$('.btn_repeat').on('click', function () {
		$('.gallery_outbox').removeClass('hide').show();
		$('.gallery_repeated').addClass('hide').hide();

		$(".gallery_outbox .owl-carousel").trigger('to.owl.carousel', 0);
		$('.btn_repeat').parent('p').addClass('hide');
	});
    /* /Gallery Inline Post Carousel, and outline Modal box */

	$(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
	$(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');

    /* my Tries to add dragmove Thumbnail carousel
     jQuery(".owl-thumbs").draggable({ 
     cursor: "move", 
     containment: "parent",
     stop: function() {
     if(jQuery(".owl-thumbs").position().left < 1)
     jQuery(".owl-thumbs").css("left", "720px");
     }
     });*/

	/* Collapse Change Arrow Direction */
	$('.panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
	});

//The reverse
	$('.panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
	});
    /* /Collapse Change Arrow Direction */
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.article_sticky').fadeIn();
	} else {
		$('.article_sticky').fadeOut();
	}
});