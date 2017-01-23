// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('#first').click(function(){
	$('#bigimage').attr('src','img/1.jpg')
})

$('#second').click(function(){
	$('#bigimage').attr('src','img/2.jpg')
})

$('#third').click(function(){
	$('#bigimage').attr('src','img/3.jpg')
})

$('#fourth').click(function(){
	$('#bigimage').attr('src','img/4.jpg')
})

// function fourthImage(){
// 	$('#bigimage').attr('src','img/4.jpg')
// }

$('.thumb').click(function(){
	// $('#bigimage').attr('src','img/1.jpg')
	// console.log($(this).attr('src'))
	var image = ($(this).attr('src'))
	$('#bigimage').attr('src', image)
	// $('#bigimage').attr('src', $(this).attr('src'))
})