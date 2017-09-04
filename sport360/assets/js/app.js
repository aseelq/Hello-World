$(document).ready(function () {
    $(".toggle-menu .show_hide_menu").click(function () {
        $("body").toggleClass("noscroll");
        $("#menu").slideUp({
            duration: 500
        });
        $("#menu").slideDown()
        $('.show_hide_menu').css('display', 'none');
        $('.open-menu').css('display', 'none');
        $('.close-menu').css('display', 'block');
        $('.show_hide_close_menu').css('display', 'block');
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });

    $(".toggle-menu .show_hide_close_menu").click(function () {
        $("body").toggleClass("noscroll");
        $("#menu").toggle();
        $('.show_hide_menu').css('display', 'block');
        $('.close-menu').css('display', 'none');
        $('.open-menu').css('display', 'block');
        $('.show_hide_close_menu').css('display', 'none');
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });

    //for level one 
    $(".news").click(function () {
        $("#news").css("display", "block");
        $("#videos, #livescore, #other, #subsc, #photos").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });
    $(".photos").click(function () {
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    $(".other").click(function () {
        $("#other").css("display", "block");
        $("#news, #videos, #livescore, #photos, #subsc").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    $(".subsc").click(function () {
        $("#subsc").css("display", "block");
        $("#news, #videos, #livescore, #other, #photos").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    //for level two 
    $("#football").click(function () {
        $(".levelOne,.levelTwo").css("display", "none");
        $(".levelThree").css("display", "block");
    });
    var url = window.location.href.includes("/en");
    if(url){
        $(".fa-arrow-left").click(function () {
            $(".levelOne,.levelTwo").css("display", "block");
            $(".levelThree").css("display", "none");
        });
    } else {
        $(".fa-arrow-right").click(function () {
            $(".levelOne,.levelTwo").css("display", "block");
            $(".levelThree").css("display", "none");
        });
    }
    
});