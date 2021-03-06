$(function() {


	'use strict';


	// scroll down upon click 'Get to know me'
	$("#get-started a").on("click", function() {
		$.fn.pagepiling.moveSectionDown();
	});


	let projectIndex = 0;

	
	// load portfolio item for the homepage
	renderPortfolioItem()





	// show portfolio name when hovered on portfolio-nav
	$('#portfolio-nav div.prev').on("mouseover", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.css({'display':'inline-block', 'overflow': 'hidden', 'white-space' : 'nowrap', 'text-overflow':'ellipsis'});
		$portfolioName.addClass('animated fadeInRight');
	});

	$('#portfolio-nav div.next').on("mouseover", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.css({'display':'inline-block', 'overflow': 'hidden', 'white-space' : 'nowrap', 'text-overflow':'ellipsis'});
		$portfolioName.addClass('animated fadeInLeft');
	});


	// hide portfolio name when un-hovered on portfolio-nav
	$('#portfolio-nav div.prev').on("mouseleave", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.removeClass('animated fadeInRight');
		$portfolioName.css({'display':'none'});
		
	});

	$('#portfolio-nav div.next').on("mouseleave", function() {
		var $portfolioName = $(this).find('span');
		$portfolioName.removeClass('animated fadeInLeft');
		$portfolioName.css({'display':'none'});

	});



	$("#portfolio-nav div.prev span").on("click", function() {
		const newProjectIndex = projectIndex-1;
		projectIndex--;
		renderPortfolioItem();
	});


	$("#portfolio-nav div.next span").on("click", function() {
		const newProjectIndex = projectIndex+1;
		projectIndex++;
		renderPortfolioItem();
	});






	function renderPortfolioItem() {
		$.getJSON('data/data.json', {}, function(data) {
			const projects = data.projects.map(proj => {
				if(proj.category !== 'graphics') return proj;
			});
			const project = projects[projectIndex];
	
			// set portfolio for the elements
			$("#portfolio-title").html(project.title);
			$("#portfolio-info .metadata strong").html(project.completionDate);
			$("#portfolio-desc").html(project.description);
			$("#portfolio-img").attr("src", project.imageUrl);
			$("#view-proj a").attr("href","single.html?title="+project.slug);
	
	
			// set previous and next portfolio names
			if(projects[projectIndex-1]) {
				$('#portfolio-nav div.prev span').html(`<strong class="text-bold">Previous:</strong> ${projects[projectIndex-1].title}`);
			} else {
				$('#portfolio-nav div.prev span').html(`No more items to show`);
			}
			
			if(projects[projectIndex+1]) {
				$('#portfolio-nav div.next span').html(`<strong class="text-bold">Next:</strong> ${projects[projectIndex+1].title}`);
			} else {
				$('#portfolio-nav div.next span').html(`No more items to show`);
			}
		});
	}


});