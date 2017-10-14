$(document).ready(function () {
    $el = $('#paragraph-seemore-pointer');
    var bottom = $el.position().top + $el.outerHeight(true);
	if($(".fade-out > p").length > 2 ){
		$(".fade-out").css("max-height",bottom+'px');
	}else{
		$("#read-more").hide();
		$(".fade-out").append('<style>.fade-out:before{content:none}</style>');
		$(".fade-out").css("max-height","none");
		$("#read-more").hide();
		$(".aricle-cntent").css("padding-bottom","10px");
            }
    var url = true;
   
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
});

	jwplayer("mainVideo").setup({
		"file": vFile,
		"image": vImage
	});

});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.article_sticky').fadeIn();
	} else {
		$('.article_sticky').fadeOut();
	}
});