$(document).ready(function () {
    if( $('.loader').length > 0){
     $('.loader').css('display','none');
}
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

	$(window).scroll(function() {
		setTimeout(function(){
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {

				if (stopLoad == false) {

					$('.loader').show();

					var width = $(document).width();
					var layout = 'Desktop';

					if (width <= 576) {
						layout = 'Mobile';
					} else if (width > 480 && width <= 768) {
						layout = 'Tablet';
					}

					$.ajax({
						type: "GET",
						url: "/ajax/videos/?page="+vPage+"&layout=" + layout + '&filter=' + $('#videos-input').val(),
						success: function (result) {
							if (result.trim() != '') {
                                                            $('.loader').css('display','block');
								$('#request-result').append(result);
								$('.loader').hide();
								stopLoad = false;
							}else {
                                                            $('.loader').addClass('hide');
                                                            $('.loader').css('display','none');
                                                        }
						}
});
				}

				stopLoad = true;
			}
		}, 2000);

	});
});