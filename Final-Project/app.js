$(document).ready(function () {

	$(function(){
		$(".name").typed({
			strings: ["Graphic Designer","Rachel Kim"],
			typeSpeed: 50,
			loop: true,
			backDelay: 2000,
				
			showCursor: false
		});
	});

	$(function(){
		$(".rk-toplogo-kim").typed({
			strings: ["Graphic designer","Rachel kim"],
			typeSpeed: 50,
			loop: false,
			backDelay: 2000,
				
			showCursor: false
		});
	});

	$(function(){
		$('.rk-logo').addClass('animated fadeInDown');
		
		$('.rk-logo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
		
		function removeAnimateClass (){
			$('.rk-logo').removeClass('fadeInDown')
		}

	})

	// $(function(){
	// 	$('.rk-column-left').addClass('animated slideInLeft');
		
	// 	$('.rk-column-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
		
	// 	function removeAnimateClass (){
	// 		$('.rk-column-left').removeClass('slideInLeft')
	// 	}

	// })

	// $(function(){
	// 	$('.rk-column-right').addClass('animated slideInRight');
		
	// 	$('.rk-column-right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
		
	// 	function removeAnimateClass (){
	// 		$('.rk-column-right').removeClass('slideInRight')
	// 	}

	// })

	$(window).scroll(function(){
		var rkWindowScrollTop = $(window).scrollTop();

		if (rkWindowScrollTop > 2018) {
			$('.rk-verytopnavshow').show();
			console.log(rkWindowScrollTop)
		} else {
			$('.rk-verytopnavshow').hide();
			console.log(rkWindowScrollTop)
		};

		if (rkWindowScrollTop > 2748) {
			$('.skillbar').each(function(){
		
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},2000);
			});
		}

		if (rkWindowScrollTop > 2061) {
			$(function(){
				$('.rk-column-right').addClass('animated slideInRight');
				$('.rk-column-right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
				
				function removeAnimateClass (){
					$('.rk-column-right').removeClass('slideInRight')
				};
			})

			$(function(){
				$('.rk-column-left').addClass('animated slideInLeft');
				$('.rk-column-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
				
				function removeAnimateClass (){
					$('.rk-column-left').removeClass('slideInLeft')
				};
			}); 	
		} 

	})


	$('.rk-topnav-link').click(function(event){
		event.preventDefault();
		$(this).addClass('rk-topactive');
		$(this).siblings().removeClass('rk-topactive');
	});

	$('.rk-topnav-link-show').click(function(event){
		event.preventDefault();
		$(this).addClass('rk-topactiveshow');
		$(this).siblings().removeClass('rk-topactiveshow');
	});

	$('.rk-nav').click(function(event){
		event.preventDefault();
		$(this).addClass('rk-active');
		$(this).siblings().removeClass('rk-active');
	});

	$("#about").click(function() {
		$('html, body').animate({
			scrollTop: $("#rk-aboutme").offset().top
		}, 500);
	});

	$("#portfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#rk-portfolio").offset().top
		}, 500);
	});


	$('.rk-nav-link').click(function(event){
		event.preventDefault();
		$(this).addClass('rk-active');
		$(this).siblings().removeClass('rk-active');
	});


	$('.rk-empty-circle').hover(function () {
		$(this).toggleClass('rk-full-circle');
		
	
	});




	  



});