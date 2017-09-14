// Mobile Sidebar
$(document).ready(function () {
  var hamburger  = $('.hamburger');
  var nav  = $('nav');
  var overlay  = $('.overlay');


  hamburger.click(function () {
    menu_toggle();
  });


  overlay.click(function () {
    menu_hide();
  });


  function menu_hide() {
    overlay.hide();
    hamburger.removeClass('is-open');
    hamburger.addClass('is-closed');
    nav.removeClass('is-open');
    $('#wrapper').removeClass('toggled');
  }


  function menu_toggle() {
    if (overlay.is(':visible')) {
      overlay.hide();
      hamburger.removeClass('is-open');
      hamburger.addClass('is-closed');
      nav.removeClass('is-open');
      $('#wrapper').removeClass('toggled');
    } else {
      overlay.show();
      hamburger.removeClass('is-closed');
      hamburger.addClass('is-open');
      nav.addClass('is-open');
      $('#wrapper').addClass('toggled');
    }
  }

  $(window).resize(menu_hide);

  if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        offset: {top:100}
    });
  }


  $('#collapseTwo').collapse({parent: '#accordion', toggle: false});
  $('#collapseThree').collapse({parent: '#accordion', toggle: false});
  $('#collapseFour').collapse({parent: '#accordion', toggle: false});
  $('#collapseFive').collapse({parent: '#accordion', toggle: false});
  $('#collapseSix').collapse({parent: '#accordion', toggle: false});


	var pswpElement = document.querySelectorAll('.pswp')[0];

	var pics = [];
	var options = {
		index: 0,
		getThumbBoundsFn: function(i) {
			var thumbnail = $('#gallery>a').eq(i).find('img')[0];
			var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
			var rect = thumbnail.getBoundingClientRect();

			return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
		}
	};

	var openImage = function(i) {
		return function() {
			var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pics, options);
			gallery.options.index = i;
			gallery.init();
			return false;
		};
	};

	$('#gallery>a').each(function(i) {
		var link = $(this);
		link.click(openImage(i));
		var w = link.attr('data-w') || 900;
		var h = link.attr('data-h') || 600;
		pics.push({
			src: link.attr('href')
			, w: w
			, h: h
		});
	});
});
