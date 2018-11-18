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


$(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
	$('#slidemenu a').on('click touchstart', function (e){
		e.preventDefault();
	});

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    
    $("#slide-nav, #smlheader_sticky").on("click touchstart", toggler, function (e) {		
		$('#slidemenu a').on('click touchstart', function (e){
			$('#slidemenu a').unbind('click');
		});
		
        $('html').toggleClass('menu_open');
        if ($('html').hasClass('menu_open')){
            disableScrolling();
        }else{
            enableScrolling();
        }
    });
	
	
	/* Change Arrow of Menu */
	$(document).on('click touchend', function (event) {
		if(!$(event.target).closest('#slidemenu, .navbar-toggle').length){
			$('html').removeClass('menu_open');
            enableScrolling();
		}
	});
	/* /Change Arrow of Menu */
});