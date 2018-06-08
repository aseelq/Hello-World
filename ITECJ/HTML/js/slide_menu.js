var disableScroll = false;

function disableScrolling() {
    disableScroll = true;
}


function enableScrolling() {
    disableScroll = false;
}

document.ontouchmove = function(e){
   if(disableScroll){
     e.preventDefault();
   } 
}

$(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    
    $("#slide-nav, #smlheader_sticky").on("click touchstart", toggler, function (e) {
        $('html').toggleClass('menu_open');
        if ($('html').hasClass('menu_open')){
            disableScrolling();
        }else{
            enableScrolling();
        }
    });
	
	
	/* Change Arrow of Menu */
	$('#slidemenu h2.dropdown-toggle').parent().click( function(){
		$('h2.dropdown-toggle').find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
		
		if(!$(this).hasClass('open')) {
			$(this).find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
		}
		else if($(this).hasClass('open')){
			$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
		}
	});
	
	$(document).on('click touchend', function (event) {
		if(!$(event.target).closest('#slidemenu, .navbar-toggle').length){
			$('#slidemenu').find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
			$('#slidemenu').find('li').removeClass('open');
			$('html').removeClass('menu_open');
                        enableScrolling();
		}
	});
	/* /Change Arrow of Menu */
});