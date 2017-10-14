$(document).ready(function () {
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