var disableScroll = false;

function disableScrolling() {
    disableScroll = true;
}


function enableScrolling() {
    disableScroll = false;
}

function DoPrevent(e) {
  e.preventDefault();
  e.stopPropagation();
}

var clickBtn = false;

$(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
	
    // Enter your ids or classes
    var toggler = '.navbar-toggle';
	 
    $("#slide-nav, #smlheader_sticky").on("click touchstart", toggler, function (e) {
        $('html').toggleClass('menu_open');
		
		// Prevent menu link activation on first click
		$('#slidemenu a').on("click touchstart", function(e){
			if(clickBtn == false){
				e.preventDefault();
			}
			clickBtn = true;
		});
		
		
        if ($('html').hasClass('menu_open')){
            disableScrolling();
        }else {
            enableScrolling();
        };
    });
		
	$(document, '#slidemenu #closeBtn').on('click touchend', function (event) {
		if(!$(event.target).closest('#slidemenu .lstmenu, .navbar-toggle').length){
			$('html').removeClass('menu_open');
            enableScrolling();
			clickBtn = false;
		}
	});
});