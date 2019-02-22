export const loading_menu_animate = ($) => {
	var main_menu_icon = $(".gla_main_menu_icon b");
	main_menu_icon.each(function () {
		var i = 2;
		$(this).find('span').each(function () {
			$(this).css('transition-delay', '0.' + i + 's');
			i++;
		})
	});

	$("header .gla_logo_animation span").each(function () {
		var min = 0;
		var max = 50;
		var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		$(this).css('transition-delay', '0.' + randomNumber + 's');
	});
	$('.gla_main_menu').on("click", function (e) {
		$(this).next('.gla_main_menu_content').toggleClass('active');
		$(this).next().next('.gla_main_menu_content_menu').toggleClass('active');
		$(this).toggleClass('active');
	});
	$('.gla_main_menu_content_menu .gla_parent:last-child').on("click", function (e) {
		$(this).find('ul').slideToggle(300);
	});
	$('.gla_mobile_menu').on("click", function (e) {
		$(this).toggleClass('active');
		$('.gla_mobile_menu_hor').toggleClass('active');
	});
	$('.gla_header_search span').on("click", function (e) {
		$(this).next('.gla_header_search_cont').fadeToggle();
	});
	/* Anchor Scroll */
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$(".gla_logo").addClass('active');
			$('body').addClass('gla_first_step');

		} else {
			$('body').removeClass('gla_first_step');
			$(".gla_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('gla_second_step');
		} else {
			$('body').removeClass('gla_second_step');
		}
	});

	$('.gla_parent').on({
		mouseenter: function () {
			$(this).find('ul').addClass('active');
		},
		mouseleave: function () {
			$(this).find('ul').removeClass('active');
		}
	});
}