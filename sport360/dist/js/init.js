/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*$('.scroll').jscroll({
 autoTrigger: false
 });
 */
var url = window.location.pathname;
var page = 1;
var lpage = 4;

if ($('.loader').length > 0) {
    $('.loader').css('display', 'none');
}

$(window).scroll(function () {

    if ($('.home-page').length > 0) {

        $('#more').hide();
        $('#no-more').hide();

        if ($(window).scrollTop() + $(window).height() > $(document).height()) {
            $('#more').css("top", "400");
            $('#more').show();
        }
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {

            $('#more').hide();
            $('#no-more').hide();

            page++;

            var data = {
                page_num: page
            };

            var actual_count = "9999";

            if ((page - 1) * 12 > actual_count) {
                $('#no-more').css("top", "400");
                $('#no-more').show();
            } else {
                $('.loader').addClass('show');
                $.ajax({
                    type: "GET",
                    url: "/ajax/morestories/?page=" + page,
                    data: data,
                    success: function (res) {
                        if (res.trim() !== '') {
                            $('.loader').css('display', 'block');
                            $('.loader').addClass('show');
                            $("#result").fadeIn('slow');
                            $("#result").append(res);
                        } else {
                            $('.loader').addClass('hide');
                            $('.loader').css('display', 'none')
                        }


                    }
                });
            }

        }
    }



    if ($('.video-listing').length > 0) {


        var ajax_url = '';
        if (url.indexOf('videos') !== -1) {
            ajax_url = url.replace("/videos", "ajax/videoajax");
        } else if (url.indexOf('photo-galleries') !== -1) {
            ajax_url = url.replace("/photo-galleries", "ajax/photoajax");
        } else if (url.indexOf('category') !== -1) {
            ajax_url = url.replace("/category", "ajax/categoryajax");
        } else if (url.indexOf('tags') !== -1) {
            ajax_url = url.replace("/tags", "ajax/tagsajax");
        } else if (url.indexOf('all-stories') !== -1) {
            ajax_url = url.replace("/all-stories", "ajax/allstoriesajax");
        }
        //alert(ajax_url);


        //var page = 1;
        $('#more').hide();
        $('#no-more').hide();

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
            $('#more').css("top", "400");
            $('#more').show();
        }
        if ($(window).scrollTop() + $(window).height() - 200 == $(document).height() - 200) {

            $('#more').hide();
            $('#no-more').hide();

            lpage++;

            var data = {
                page_num: lpage
            };

            var actual_count = "9999";

            if ((lpage - 1) * 12 > actual_count) {
                $('#no-more').css("top", "400");
                $('#no-more').show();
            } else {

                var width = $(document).width();
                var layout = 'Desktop';

                if (width <= 576) {
                    layout = 'Mobile';
                } else if (width > 480 && width <= 768) {
                    layout = 'Tablet';
                }


                // $('.loader').addClass('show');
                $.ajax({
                    type: "GET",
                    url: "http://" + window.location.host + "/" + ajax_url + "?page=" + lpage + '&layout=' + layout,
                    data: data,
                    success: function (res) {
                        if (res.trim() !== '') {
                            $('.loader').css('display', 'block');
                            $('.loader').addClass('show');
                            $("#result").fadeIn('slow');

                            if (layout == 'Tablet') {
                                $(".tablet-append-result").append(res);
                            } else {
                                $("#result").append(res);
                            }
                        } else {
                            $('.loader').css('display', 'none');
                        }


                    }
                });
            }

        }
    }



    if ($('.video-content').length > 0) {

        var ajax_url = 'ajax/nextarticle';


        //var page = 1;
        $('#more').hide();
        $('#no-more').hide();

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
            $('#more').css("top", "400");
            $('#more').show();
        }
        if ($(window).scrollTop() + $(window).height() - 200 == $(document).height() - 200) {

            $('#more').hide();
            $('#no-more').hide();

            var id = $('#post_id').val();
            var cat_id = $('#cat_id').val();
            if (id == '' && cat_id == '') {
                $('#no-more').css("top", "400");
                $('#no-more').show();
            } else {

                // $('.loader').addClass('show');
                $.ajax({
                    type: "GET",
                    url: "http://" + window.location.host + "/" + ajax_url + "?id=" + id + '&cat_id=' + cat_id,
                    data: data,
                    success: function (res) {
                        if (res.trim() !== '') {
                            $('.loader').css('display', 'block');
                            $('.loader').addClass('show');
                            $("#result").fadeIn('slow');
                            //alert(res);
                          window.location.href = res;
                        }else{
                           
                            $('.loader').css('display', 'none');
                        }
                            


                    }
                });
            }

        }

    }


$('.v-item,.story,.pic-link,.photoitem').on('click',function(i,e){
    var url = $(this).find('a').attr('href');
    window.location.href = url;
})

});


$(document).ready(function () {

    $('.expanded-Tags,.expanded-section').on('click', function () {
        $(this).parent().parent().find('a').css('display', 'inline-block');
        $(this).css('display', 'none');
    });

	$(".facebook-comment").click(function () {
		var x = document.getElementById('myDIV');
		if (x.style.display === 'none' || x.style.display=== "") {
			x.style.display = 'block';
			$(".faup").css("display", "inline-block");
			$(".fadown").css("display", "none");
		} else {
			x.style.display = 'none';
			$(".faup").css("display", "none");
			$(".fadown").css("display", "inline-block");
		}
	});
  
    
    var url = true;
    $('.node-carousel').owlCarousel({
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
    
    $('.new-slider .owl-carousel').owlCarousel({
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
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    
    
    

});
