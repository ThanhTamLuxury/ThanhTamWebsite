export const onLoadingSliderCss = ($) => {
    $('.gla_image_bck').each(function () {
        var image = $(this).attr('data-image');
        var gradient = $(this).attr('data-gradient');
        var color = $(this).attr('data-color');
        var blend = $(this).attr('data-blend');
        var opacity = $(this).attr('data-opacity');
        var position = $(this).attr('data-position');
        var height = $(this).attr('data-height');
        if (image) {
            $(this).css('background-image', 'url(' + image + ')');
        }
        if (gradient) {
            $(this).css('background-image', gradient);
        }
        if (color) {
            $(this).css('background-color', color);
        }
        if (blend) {
            $(this).css('background-blend-mode', blend);
        }
        if (position) {
            $(this).css('background-position', position);
        }
        if (opacity) {
            $(this).css('opacity', opacity);
        }
        if (height) {
            $(this).css('height', height);
        }

    });
    /* Over */
	$('.gla_over, .gla_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		var gradient = $(this).attr('data-gradient');
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});
	$('.gla_slide_title, h2').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('span').css('color', color);	
		}
	});
	$('.gla_icon_box').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('i').css('color', color);	
		}
	});
	$('.skill-bar-content').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).css('background-image', color);	
		}
	});
	$('img.gla_img_shadow').each(function(){
		var color = $(this).attr('data-shadow');
		if (color){
			$(this).css('filter', color);	
		}
    });
    $('.gla_page').each(function(){
		var border = $(this).attr('data-border');
		if (border){
			$('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);	
			$('.gla_bordered_block').css('border-left-color', border);
			$('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
			$('.gla_team_simple .gla_bordered_block').css('border-top-color', border);	
		}
	});
	$('.gla_default_menu').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('ul').css('background-color', color);	
		}
    });
	
	

		
}


