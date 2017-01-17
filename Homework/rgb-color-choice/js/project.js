// 1. Use document.getElementById() and
// assign the .onclick event to #color-button

// 2. Write a function, named changeColor,
// that is called when #color-button is clicked

// 3. Inside of the function changeColor, use variables
// to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates
// the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be:
// rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text
// to colorStr

// 6. Use .style.background to change the background of #wrapper
// to colorStr

// -------------------------------------------------------
// pseudo code:

// box1-red
// box2-green
// box3-blue
// if you write 0-255 in each boxes
// click 'change the color' button
// background color changes to the number code in the box


// Question: in naming variables, can I use numbers?
// for example: var input1, var input2?



document.getElementById('color-button').onclick = changeColor;
// grabbing the button element, make it to turn into something when it is clicked.

function changeColor(){
// giving jobs for the button to do when clicked.
// set variables of each red, green, and blue and grab the value.
// because the value is a string, make them change to numbers.
	var redValue = document.getElementById('red').value;
		redValue = parseInt(redValue);
	var greenValue = document.getElementById('green').value;
		greenValue = parseInt(greenValue);
	var blueValue = document.getElementById('blue').value;
		blueValue = parseInt(blueValue);
	
	var colorStr = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
// set a new variable that concatenate all 3 values
	document.getElementById('colorful-text').innerHTML = colorStr;
// grab the text element, and re-write it with colorStr	
	var backgroundColor = document.getElementById('wrapper');
	backgroundColor.style.background= colorStr;
	console.log(colorStr);
// grabbing the whole wrapper - setting it to a variable so you know what is going on, 
// and changing the css of the element to reflect the new rgb values 
// ex: background-color: (rgb(255, 0, 4))
}

