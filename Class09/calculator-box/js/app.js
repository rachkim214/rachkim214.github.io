// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

$('#a10').click(function( ){
	// console.log('click')
	var out = $('#out').html();
	$('#out').html(parseInt(out) + 10);
})

$('#a20').click(function(){
	var out = $('#out').html();
	$('#out').html(parseInt(out) + 20);
})

$('#a30').click(function(){
	var out = $('#out').html();
	$('#out').html(parseInt(out) + 30);
})

// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

$('#n10').click(function( ){
	// console.log('click')
	var out = $('#out').html();
	$('#out').html(parseInt(out) - 10);
})

$('#n20').click(function( ){
	// console.log('click')
	var out = $('#out').html();
	$('#out').html(parseInt(out) - 20);
})

$('#n30').click(function( ){
	// console.log('click')
	var out = $('#out').html();
	$('#out').html(parseInt(out) - 30);
})

// - C) #red and #blue should change the background color of #out to red and blue, respectively

$('#red').click(function( ){
	// console.log('click')
	$('#out').css('background','red');	
})

$('#blue').click(function( ){
	// console.log('click')
	$('#out').css('background','blue');
})

// - D) #out should change the background of #out to white, and set the value back to zero

$('#out').click(function( ){
	// console.log('click')
	$('#out').css('background','white');
	$('#out').html(0);	
})

// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
