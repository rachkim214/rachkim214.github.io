$(document).ready(function () {
	$('#animate-me').click(function(){
		$('h1').addClass('zoomIn');
		
		$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimateClass);
		
		function removeAnimateClass (){
			$('h1').removeClass('zoomIn')
		}

	})

})
