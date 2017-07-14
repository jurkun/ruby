window.have_touch = !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
window.have_pointer = !window.have_touch;

$(function() {
    // BEGIN: Override a tag
    $('a').click(function(event) {
        var href = $(this).attr('href'),
            is_hash = false;

        if (href != undefined)
        {
            is_hash = href.slice(0,1);
            is_hash = ((is_hash == '#') ? true : false);
        }
        else
        {
            is_hash = true;
        }

        // Behavior
        if ($(this).hasClass('ajax')) event.preventDefault();

        // Auto Loader
        if ((is_hash == false) && ( ! $(this).hasClass('no-loader'))) openLoader();
    });
    // END: Override a tag

	if ( ! window.have_touch)
	{
	    if ($('.scrollbar').length)
	    {
	        $('.scrollbar').niceScroll({cursorborder:'none',autohidemode: false,cursorcolor: "#CCC",background: "rgba(0,0,0,0.1)"});
	    }

	    if ($('.scrollbar-vertical').length)
	    {
	        $('.scrollbar-vertical').niceScroll({cursorborder:'none',horizrailenabled: false,cursorcolor: "#CCC",background: "rgba(0,0,0,0.1)",cursorfixedheight:60});
	    }
	}

	$(window).scroll(function() {
    	if ($('main').length) {
	        if ($(this).scrollTop() > $('main').offset().top) {
	            $('body').addClass('scrolled');
	        }
	        else
	        {
	            $('body').removeClass('scrolled');
	        }

	        if ($('.scrollbar').length)
		    {
		        setTimeout(function(){
					$('.scrollbar').getNiceScroll().resize();
				}, 100);
		    }

		    if ($('.scrollbar-vertical').length)
		    {
	            setTimeout(function(){
					$('.scrollbar-vertical').getNiceScroll().resize();
				}, 100);
		    }
	    }
    });

	if ($('.hastip').length)
	{
		var hastip_css = {
	            'padding': '0 10px',
	            'height': '30px',
	            'line-height': '30px',
	            'max-width': '200px',
	            'color': '#FFF',
	            'font-size': '11px',
	            'background': '#000',
	            'text-shadow': 'none',
	            'border-radius': '3px',
	            'word-wrap': 'break-word',
	            'text-overflow': 'ellipsis',
	            'white-space': 'nowrap',
	        };

	    $('.hastip-top').tooltipsy({
	        offset: [0, -5],
	        css: hastip_css
	    });

	    $('.hastip-bottom').tooltipsy({
	        offset: [0, 5],
	        css: hastip_css
	    });

	    $('.hastip-left').tooltipsy({
	        offset: [-5, 0],
	        css: hastip_css
	    });

	    $('.hastip-right').tooltipsy({
	        offset: [5, 0],
	        css: hastip_css
	    });
	}

	$('header .menu-toggle').click(function(e) {
    	if ($('body').hasClass('toggle'))
    	{
    		$('body').removeClass('toggle');
    	}
    	else
    	{
    		$('body').addClass('toggle');
    	}

        $('.scrollbar-vertical').getNiceScroll().resize();
    });

	$('header .header-nav li.has-child a').click(function(e) {
		if ($(this).parent().hasClass('active'))
        {
            $(this).parent().removeClass('active');
        }
        else
        {
			$(this).parent().parent().find('li.active').removeClass('active');
            $(this).parent().addClass('active');
        }
	});

	if (($('body').attr('current-page') != undefined) && ($('body').attr('current-page') != ''))
    {
        $('nav li.' + $('body').attr('current-page')).addClass('active');
    }

	$('nav li.has-child > a').click(function(e) {
		e.preventDefault();

        if ($(this).parent().hasClass('active') && $(this).parent().hasClass('open'))
        {
            $(this).parent().removeClass('active');
            $(this).parent().removeClass('open');
        }
        else
        {
			$(this).parent().parent().find('li.active').removeClass('open');
			$(this).parent().parent().find('li.active').removeClass('active');
            $(this).parent().addClass('active');
            $(this).parent().addClass('open');
        }

        $('.scrollbar-vertical').getNiceScroll().resize();
    });

    $('a.scrolltop').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });

    $('.form-item-attribute.attr-toggle .form-attribute > button').click(function(e) {
		e.preventDefault();

		$(this).parent().find('.attr-toggle-wrapper').toggle();
    });

    $('.toggle-action').click(function(e) {
		e.preventDefault();

		$(this).parent().find('.toggle-item').toggle();
    });

    $('.tab-nav li > a').click(function(e) {
		e.preventDefault();

		var target = $(this).attr('href');
		var content = $(this).attr('data-content'),
			content = ((content != undefined) ? content : '.tab-content');

		$('.tab-nav li > a, ' + content).removeClass('active');
		$(this).addClass('active');
		$(target).addClass('active');
    });

    $('.accordion li > a').click(function(e) {
		e.preventDefault();

		$(this).parent().parent().find('li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().find('.accordion-content').hide();
		$(this).parent().find('.accordion-content').toggle();
    });
});
