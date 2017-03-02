$(document).ready(function () {
	$(function(){
		$(".k-name").typed({
			strings: ["Graphic Designer | Rachel Kim","Graphic Designer | Rachel Kim"],
			typeSpeed: 50,
			loop: true,
			backDelay: 2000,
				
			showCursor: false
		});
	});

	$('.k-nav').click(function(event){
		event.preventDefault();
		$(this).addClass('k-active');
		$(this).siblings().removeClass('k-active');
	});







	




	$('.k-topnav-link-show').click(function(event){
		event.preventDefault();
		$(this).addClass('k-topactiveshow');
		$(this).siblings().removeClass('k-topactiveshow');
	});


















});