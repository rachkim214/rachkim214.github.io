$(document).ready(function () {

	$('#myForm').submit(function(event){
		(event.preventDefault());
	})


	$('a').click(function(event){
		event.preventDefault();
	
		console.log('work')

	})




})
