Journal.notificationTimer = parseInt('1500', 10);

Journal.quickviewText = 'QuickView';

Journal.scrollToTop = parseInt('0', 10);

Journal.searchInDescription = true;

Journal.galleryZoom = true;
Journal.galleryThumb = true;
Journal.galleryThumbHide = false;
Journal.galleryThumbWidth = parseInt('100', 10);
Journal.galleryThumbHeight = parseInt('100', 10);
Journal.galleryThumbSpacing = parseInt('7', 10);
Journal.galleryBarsDelay = parseInt('5000', 10);

Journal.infiniteScrollStatus = true;
Journal.infiniteScrollLoadingText = 'Loading';
Journal.infiniteScrollNoMoreItemsText = 'No items left.';
Journal.infiniteScrollLoadMoreItemsText = 'Load more';
Journal.infiniteScrollLoadMoreItemsOffset = parseInt('0', 10);
Journal.hasCountdownEnabled = false;
Journal.hasStickyScroll = 1;


Journal.BASE_HREF = 'url(' + $('base').attr('href') + ')';

$(document).ready(function () {

$(".product-page .rating a").click(function() {
    $('html, body').animate({
        scrollTop: $("#tabs").offset().top - 50
    }, 600);
});

if ($('html').hasClass('filter-on-mobile')) {
$('.journal-sf').before($('<div class="open-filter" style="display:none">Open Product Filters</div>'));
$('.open-filter').on('click', function () {
var $filter = $('.journal-sf .box').first();
if ($filter.hasClass('is-visible')) {
$('.side-column .journal-sf .box').slideUp(300);
$('.sf-reset').fadeOut(200);
$filter.removeClass('is-visible');
} else {
$('.side-column .journal-sf .box').slideDown(300);
$('.sf-reset').fadeIn(200);
$filter.addClass('is-visible');
}
});
}

Journal.productPage();

  Journal.enableStickyHeader(0);

  $('header').addClass('menu-cart-off');

  $(window).scroll( function() {
  if ($(window).scrollTop() > $('.journal-cart').offset().top){
  $('header').addClass('phone-sticky-cart');
  }
  else{
  $('header').removeClass('phone-sticky-cart');
  }

  if ($(window).scrollTop() > $('.journal-cart').offset().top + 40){
  $('header').addClass('phone-sticky-menu');
  }
  else{
  $('header').removeClass('phone-sticky-menu');
  }
  });


  $('.product-tabs').insertAfter('.product-info');

  Journal.enableProductOptions();
  Journal.updatePrice = true;

  Journal.enableSideBlocks();

  Journal.searchAutoComplete();

  Journal.enableQuickView();
  Journal.quickViewStatus = true;

  if ($('html').hasClass('product-page') || $('html').hasClass('quickview')) {
  Journal.enableCloudZoom('inner');
  }

  Journal.productPageGallery();




$('#top-modules > .hide-on-mobile').parent().addClass('hide-on-mobile');
$('#bottom-modules > .hide-on-mobile').parent().addClass('hide-on-mobile');

$('#top-modules .gutter-on').parent().addClass('gutter');
$('#bottom-modules .gutter-on').parent().addClass('gutter');

if (Journal.infiniteScrollStatus && $('.main-products').length) {
Journal.infiniteScroll();
}

$(window).resize();

Journal.init();
});

/* Custom JS */

