$(function() {
	$('.switch-theme').click(function(e){
		e.preventDefault();
		
		if ($(this).attr('cur-theme') == 'dark')
		{
			$(this).attr('cur-theme', 'light');
			$(this).find('span').text('Light');
			$('link[href="assets/css/theme-dark.css"]').attr('href', 'assets/css/theme-light.css');
		}
		else
		{
			$(this).attr('cur-theme', 'dark');
			$(this).find('span').text('Dark');
			$('link[href="assets/css/theme-light.css"]').attr('href', 'assets/css/theme-dark.css');
		}
	});

	if ($('.form-item-icheck').length)
	{
		$('.form-item-icheck').iCheck({
			checkboxClass: 'icheckbox_square',
			radioClass: 'iradio_square',
		});
	}

	if ($('.form-item-tinymce').length)
	{
		tinymce.init({
		    selector:'.form-item-tinymce',
		    height: 250,
		    menubar: false,
		    plugins: [
		        'lists link autolink table paste'
		    ],
		    toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify',
		    setup: function (editor) {
		        editor.on('change', function () {
		            editor.save();
		        });
		    }
		});
	}

	if ($('.form-item-select2').length)
	{
	    $('.form-item-select2').select2();
	}

	if ($('.form-item-masking').length)
	{
	    $('.form-item-masking').inputmask();
	}

	if ($('.form-item-datepicker').length)
	{
	    $('.form-item-datepicker').datepicker();
	}

	if ($('.form-item-timepicker').length)
	{
	    $('.form-item-timepicker').timepicker();
	}

	if ($('.form-item-spinner').length)
	{
	    $('.form-item-spinner').spinner();
	}

	if ($('.form-item-slider1').length)
	{
	    $('.form-item-slider1').slider({
			min: parseInt($('.form-item-slider1').attr('data-min')),
			max: parseInt($('.form-item-slider1').attr('data-max')),
			value: parseInt($('.form-item-slider1').attr('data-value1')),
			step: 10,
			slide: function(event, ui) {
				$('.form-item-slider1').parent().find('.item-slider-text .value').text(ui.value);
		    }
		});

		$('.form-item-slider1').parent().find('.item-slider-text .min').text($('.form-item-slider1').attr('data-min'));
		$('.form-item-slider1').parent().find('.item-slider-text .max').text($('.form-item-slider1').attr('data-max'));
		$('.form-item-slider1').parent().find('.item-slider-text .value').text($('.form-item-slider1').attr('data-value1'));
	}

	if ($('.form-item-slider2').length)
	{
	    $('.form-item-slider2').slider({
			range: true,
			min: parseInt($('.form-item-slider2').attr('data-min')),
			max: parseInt($('.form-item-slider2').attr('data-max')),
			values: [parseInt($('.form-item-slider2').attr('data-value1')), parseInt($('.form-item-slider2').attr('data-value2'))],
			slide: function(event, ui) {
				$('.form-item-slider2').parent().find('.item-slider-text .value').text(ui.values[ 0 ] + ' - ' + ui.values[ 1 ] );
		    }
		});

		$('.form-item-slider2').parent().find('.item-slider-text .min').text($('.form-item-slider2').attr('data-min'));
		$('.form-item-slider2').parent().find('.item-slider-text .max').text($('.form-item-slider2').attr('data-max'));
		$('.form-item-slider2').parent().find('.item-slider-text .value').text($('.form-item-slider2').attr('data-value1') + ' - ' + $('.form-item-slider2').attr('data-value2'));
	}
});