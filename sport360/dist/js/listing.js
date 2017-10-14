$(document).ready(function () {
    if( $('.loader').length > 0){
     $('.loader').css('display','none');
}
	$('.loader').hide();
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

    $('#search-form-ico').click(function(e){
	    e.preventDefault();
	    $('#search-form').submit();
    });

	$(".more_icon").click(function () {
        $('.more_icon').css("display", "none");
        $('.show_icon').css("display", "inline-block");
    });
    $(".more_icon_inside").click(function () {
        $('.more_icon_inside').css("display", "none");
        $('.show_icon_inside').css("display", "inline-block");
    });
});

	$('.panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
	});

	$('.panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
	});

	$(window).scroll(function() {
		if (!eventsResultFinished) {
			setTimeout(function(){
				if ($(window).scrollTop() + $(window).height() == $(document).height()) {
					if (stopLoad == false) {
						$('.loader').show();
						var city = $('#city').val();
						var sport = $('#sport').val();
						var text = $('#text').val();
						var type = $('#type').val();
						$.ajax({
							type: "GET",
							url: "/ajax/"+ajaxEvent+"/?page="+ePage+"&city="+city+"&sport="+sport+"&text="+text+"&type="+type,
							success: function (result) {
								if (result.trim() != '') {
                                                                     $('.loader').css('display','block');
									$('#request-result').append(result);
									$('.loader').hide();
									stopLoad = false;
								}else{
                                                                    $('.loader').addClass('hide');
                                                                     $('.loader').css('display','none');
                                                                }
							}
						});
					}

					stopLoad = true;
				}
			}, 1000);
		}
    });
});