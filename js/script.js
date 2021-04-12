$(function() {


	'use strict';


	// scroll down upon click 'Get to know me'
	$("#get-started a").on("click", function() {
		$.fn.pagepiling.moveSectionDown();
	});



	// show portfolio name when hovered on portfolio-nav
	$('#portfolio-nav div.prev').on("mouseover", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.css('display', 'inline-block');
		$portfolioName.addClass('animated fadeInRight');
	});

	$('#portfolio-nav div.next').on("mouseover", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.css('display', 'inline-block');
		$portfolioName.addClass('animated fadeInLeft');
	});


	// hide portfolio name when un-hovered on portfolio-nav
	$('#portfolio-nav div.prev').on("mouseleave", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.removeClass('animated fadeInRight');
		$portfolioName.css('display', 'none');
		
	});

	$('#portfolio-nav div.next').on("mouseleave", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.removeClass('animated fadeInLeft');
		$portfolioName.css('display', 'none');

	});


});