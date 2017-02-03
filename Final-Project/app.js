console.log('cool')


$('#about').click(function(event){
	event.preventDefault()

	$('.about-me').slideToggle();
})